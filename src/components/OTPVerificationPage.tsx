/**
 * OTP Verification Page Component
 * 
 * Handles SMS OTP verification after phone number submission.
 * Provides a clean UI for entering the 6-digit verification code.
 */

import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';

interface OTPVerificationPageProps {
  phoneNumber: string;
  onVerificationSuccess: (user: any) => void;
  onBack: () => void;
  onResendOTP: () => void;
}

export default function OTPVerificationPage({ 
  phoneNumber, 
  onVerificationSuccess, 
  onBack, 
  onResendOTP 
}: OTPVerificationPageProps) {
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Resend cooldown timer
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  // Auto-focus first input
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit
    
    const newOtpCode = [...otpCode];
    newOtpCode[index] = value;
    setOtpCode(newOtpCode);
    setError(''); // Clear error on input
    
    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    
    // Auto-verify when all digits entered
    if (newOtpCode.every(digit => digit !== '') && !isVerifying) {
      handleVerifyOTP(newOtpCode.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otpCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = async (code?: string) => {
    const codeToVerify = code || otpCode.join('');
    
    if (codeToVerify.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsVerifying(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        phone: phoneNumber,
        token: codeToVerify,
        type: 'sms'
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        console.log('✅ OTP verification successful:', data.user.phone);
        onVerificationSuccess(data.user);
      } else {
        throw new Error('Verification failed');
      }

    } catch (error: any) {
      console.error('❌ OTP verification failed:', error);
      setError(error.message || 'Invalid verification code. Please try again.');
      
      // Clear OTP inputs on error
      setOtpCode(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
      
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendOTP = async () => {
    if (resendCooldown > 0) return;
    
    setResendCooldown(60); // 60 second cooldown
    setError('');
    
    try {
      await onResendOTP();
      console.log('✅ OTP resent to:', phoneNumber);
    } catch (error) {
      console.error('❌ Failed to resend OTP:', error);
      setError('Failed to resend code. Please try again.');
      setResendCooldown(0);
    }
  };

  const formatPhoneNumber = (phone: string) => {
    // Format +260977123456 as +260 977 123 456
    if (phone.startsWith('+260')) {
      const number = phone.substring(4);
      return `+260 ${number.substring(0, 3)} ${number.substring(3, 6)} ${number.substring(6)}`;
    }
    return phone;
  };

  return (
    <div className="bg-white relative size-full flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="w-full max-w-sm mb-8">
        <button 
          onClick={onBack}
          className="text-[#2d3648] hover:opacity-70 transition-opacity mb-4"
        >
          ← Back
        </button>
        
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#003630] mb-2">
            Verify Your Phone
          </h1>
          <p className="text-gray-600 text-sm">
            We sent a verification code to
          </p>
          <p className="text-[#003630] font-medium">
            {formatPhoneNumber(phoneNumber)}
          </p>
        </div>
      </div>

      {/* OTP Input */}
      <div className="w-full max-w-sm mb-6">
        <div className="flex justify-center space-x-3 mb-4">
          {otpCode.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={e => handleInputChange(index, e.target.value)}
              onKeyDown={e => handleKeyDown(index, e)}
              className={`
                w-12 h-12 text-center text-xl font-bold border-2 rounded-lg
                focus:outline-none focus:border-[#95e36c] transition-colors
                ${error ? 'border-red-300' : 'border-gray-200'}
                ${isVerifying ? 'opacity-50' : ''}
              `}
              disabled={isVerifying}
            />
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-600 text-sm text-center mb-4">
            {error}
          </div>
        )}

        {/* Loading State */}
        {isVerifying && (
          <div className="flex items-center justify-center mb-4">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#003630] mr-2"></div>
            <span className="text-gray-600 text-sm">Verifying...</span>
          </div>
        )}
      </div>

      {/* Verify Button */}
      <div className="w-full max-w-sm mb-6">
        <button
          onClick={() => handleVerifyOTP()}
          disabled={isVerifying || otpCode.some(digit => digit === '')}
          className={`
            w-full py-3 px-4 rounded-lg font-medium transition-all
            ${otpCode.every(digit => digit !== '') && !isVerifying
              ? 'bg-[#95e36c] text-[#003630] hover:bg-[#85d35c]'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {isVerifying ? 'Verifying...' : 'Verify Code'}
        </button>
      </div>

      {/* Resend Code */}
      <div className="text-center">
        <p className="text-gray-600 text-sm mb-2">
          Didn't receive the code?
        </p>
        <button
          onClick={handleResendOTP}
          disabled={resendCooldown > 0}
          className={`
            text-sm font-medium transition-colors
            ${resendCooldown > 0 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-[#003630] hover:opacity-70'
            }
          `}
        >
          {resendCooldown > 0 
            ? `Resend in ${resendCooldown}s` 
            : 'Resend Code'
          }
        </button>
      </div>

      {/* Help Text */}
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500">
          Enter the 6-digit code sent to your phone via SMS
        </p>
      </div>
    </div>
  );
}

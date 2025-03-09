import React from "react"
import { CreditCard, Check } from 'lucide-react'
import { FaUtensils, FaCreditCard, FaApplePay, FaMoneyBillWave } from "react-icons/fa"

interface PaymentPageMockupProps {
  className?: string
  textColor?: string
  bgColor?: string
  accentColor?: string
  headerColor?: string
}

export default function PaymentPageMockup({
  className = "",
  textColor = "text-white",
  bgColor = "bg-gray-900",
  accentColor = "bg-orange-500",
  headerColor = "bg-gray-800",
}: PaymentPageMockupProps) {
  return (
    <div className={`relative mx-auto w-[280px] h-[580px] ${bgColor} rounded-[40px] shadow-xl overflow-hidden border-[8px] border-gray-800 ${className}`}>
      {/* Phone Notch */}
      <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-lg"></div>
      
      {/* Menu UI */}
      <div className="h-full pt-6 overflow-hidden">
        {/* Restaurant Header */}
        <div className={`${headerColor} p-4 text-center`}>
          <div className="w-16 h-16 bg-white rounded-full mx-auto mb-2 flex items-center justify-center">
            <FaUtensils className="text-gray-800" size={30} />
          </div>
          <h3 className={`text-xl font-bold ${textColor}`}>مطعم الذواقة</h3>
          <p className={`text-sm ${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>المأكولات العالمية</p>
        </div>
        
        {/* Payment Content */}
        <div className={`${bgColor} h-full`}>
          <div className="p-4 flex items-center justify-between border-b border-white/10">
            <h3 className={`text-lg font-bold ${textColor}`}>الدفع</h3>
            <div className="flex items-center gap-2">
              <CreditCard className={`h-5 w-5 ${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`} />
              <span className={`${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>
                205.00 ريال
              </span>
            </div>
          </div>
          
          {/* Payment Methods */}
          <div className={`p-4 ${textColor}`}>
            <h4 className="font-bold mb-3">اختر طريقة الدفع</h4>
            
            {/* Credit Card Option */}
            <div className="mb-3 bg-black/10 rounded-lg p-4 border-2 border-orange-500">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <FaCreditCard className="ml-2 text-orange-500" size={20} />
                  <span className="font-bold">بطاقة ائتمان</span>
                </div>
                <div className={`${accentColor} w-5 h-5 rounded-full flex items-center justify-center`}>
                  <Check className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="bg-black/20 rounded-lg p-3 mt-3">
                <div className="flex justify-between mb-2">
                  <div className="w-full h-4 bg-white/10 rounded"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-1/2 h-4 bg-white/10 rounded"></div>
                  <div className="w-1/4 h-4 bg-white/10 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Apple Pay Option */}
            <div className="mb-3 bg-black/10 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaApplePay className="ml-2 text-white" size={24} />
                  <span className="font-bold">Apple Pay</span>
                </div>
              </div>
            </div>
            
            {/* Cash Option */}
            <div className="mb-3 bg-black/10 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaMoneyBillWave className="ml-2 text-green-500" size={20} />
                  <span className="font-bold">الدفع عند الاستلام</span>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="mt-6 bg-black/10 rounded-lg p-4">
              <h4 className="font-bold mb-3">ملخص الطلب</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={`${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>المجموع الفرعي:</span>
                  <span>185.00 ريال</span>
                </div>
                <div className="flex justify-between">
                  <span className={`${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>الضريبة (15%):</span>
                  <span>20.00 ريال</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10">
                  <span className="font-bold">الإجمالي:</span>
                  <span className="font-bold text-orange-500">205.00 ريال</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Confirm Button */}
          <div className={`absolute bottom-0 left-0 right-0 ${headerColor} p-4`}>
            <button className={`w-full ${accentColor} text-white py-2 rounded-full font-bold flex items-center justify-center`}>
              <span>تأكيد الدفع</span>
              <CreditCard className="mr-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

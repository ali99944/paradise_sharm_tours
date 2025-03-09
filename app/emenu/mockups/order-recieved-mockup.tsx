import React from "react"
import { CheckCircle, MapPin } from 'lucide-react'
import { FaUtensils } from "react-icons/fa"

interface OrderReceivedMockupProps {
  className?: string
  textColor?: string
  bgColor?: string
  accentColor?: string
  headerColor?: string
}

export default function OrderReceivedMockup({
  className = "",
  textColor = "text-white",
  bgColor = "bg-gray-900",
  accentColor = "bg-orange-500",
  headerColor = "bg-gray-800",
}: OrderReceivedMockupProps) {
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
        
        {/* Order Received Content */}
        <div className={`${bgColor} h-full p-4 overflow-y-auto ${textColor}`} style={{ height: "calc(100% - 120px)" }}>
          {/* Success Message */}
          <div className="text-center mb-6">
            <div className={`${accentColor} w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center`}>
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-1">تم استلام طلبك!</h3>
            <p className={`${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>
              رقم الطلب: #12345
            </p>
          </div>
          
          
          {/* Order Details */}
          <div className="bg-black/10 rounded-lg p-4 mb-4">
            <h4 className="font-bold mb-3">تفاصيل الطلب</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>2 × برجر لحم أنجوس</span>
                <span>130.00 ريال</span>
              </div>
              <div className="flex justify-between">
                <span>1 × سلطة سيزر</span>
                <span>35.00 ريال</span>
              </div>
              <div className="flex justify-between">
                <span>2 × عصير برتقال طازج</span>
                <span>40.00 ريال</span>
              </div>
              <div className="border-t border-white/10 pt-2 mt-2">
                <div className="flex justify-between">
                  <span className={`${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>المجموع الفرعي:</span>
                  <span>185.00 ريال</span>
                </div>
                <div className="flex justify-between">
                  <span className={`${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>الضريبة (15%):</span>
                  <span>20.00 ريال</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>الإجمالي:</span>
                  <span className="text-orange-500">205.00 ريال</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pickup Information */}
          <div className="bg-black/10 rounded-lg p-4 mb-4">
            <h4 className="font-bold mb-3">معلومات الاستلام</h4>
            <div className="flex items-start gap-2 mb-2">
              <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">مطعم الذواقة - الفرع الرئيسي</p>
                <p className={`${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'} text-sm`}>
                  شارع الملك فهد، الرياض
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to Menu Button */}
        <div className={`absolute bottom-0 left-0 right-0 ${headerColor} p-4`}>
          <button className={`w-full ${accentColor} text-white py-2 rounded-full font-bold flex items-center justify-center`}>
            <span>العودة إلى القائمة</span>
          </button>
        </div>
      </div>
    </div>
  )
}

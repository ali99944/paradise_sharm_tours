import React from "react"
import { Minus, Plus, ShoppingCart, Star, Clock } from 'lucide-react'
import { FaUtensils } from "react-icons/fa"

interface ProductDetailsMockupProps {
  className?: string
  textColor?: string
  bgColor?: string
  accentColor?: string
  headerColor?: string
}

export default function ProductDetailsMockup({
  className = "",
  textColor = "text-white",
  bgColor = "bg-gray-900",
  accentColor = "bg-orange-500",
  headerColor = "bg-gray-800",
}: ProductDetailsMockupProps) {
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
        
        {/* Product Details Content */}
        <div className={`${bgColor} h-full overflow-y-auto`} style={{ height: "calc(100% - 120px)" }}>
          {/* Product Image */}
          <div className="relative h-40">
            <img 
              src="/placeholder.svg?height=200&width=280" 
              alt="برجر لحم أنجوس" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-black/60 rounded-full p-1">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs text-white">4.8</span>
              </div>
            </div>
          </div>
          
          {/* Product Info */}
          <div className={`p-4 ${textColor}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">برجر لحم أنجوس</h3>
              <div className="text-xl font-bold text-orange-500">65 ريال</div>
            </div>
            
            <p className={`${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'} mb-4`}>
              برجر لحم أنجوس مع جبنة شيدر وصلصة خاصة، يقدم مع البطاطس المقلية والمخللات.
            </p>
            
            {/* Preparation Time */}
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-orange-500" />
              <span className={`text-sm ${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>
                وقت التحضير: 15-20 دقيقة
              </span>
            </div>
            
            {/* Ingredients */}
            <div className="mb-4">
              <h4 className="font-bold mb-2">المكونات:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-black/20 px-3 py-1 rounded-full text-sm">لحم أنجوس</span>
                <span className="bg-black/20 px-3 py-1 rounded-full text-sm">جبنة شيدر</span>
                <span className="bg-black/20 px-3 py-1 rounded-full text-sm">خبز بريوش</span>
                <span className="bg-black/20 px-3 py-1 rounded-full text-sm">خس</span>
                <span className="bg-black/20 px-3 py-1 rounded-full text-sm">طماطم</span>
                <span className="bg-black/20 px-3 py-1 rounded-full text-sm">صلصة خاصة</span>
              </div>
            </div>
            
            {/* Extras */}
            <div className="mb-4">
              <h4 className="font-bold mb-2">إضافات:</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded border border-white/30 flex items-center justify-center ${accentColor}`}>
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                    <span>جبنة إضافية</span>
                  </div>
                  <span>+10 ريال</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded border border-white/30"></div>
                    <span>شريحة لحم إضافية</span>
                  </div>
                  <span>+25 ريال</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded border border-white/30"></div>
                    <span>بيكون</span>
                  </div>
                  <span>+15 ريال</span>
                </div>
              </div>
            </div>
            
            {/* Special Instructions */}
            <div className="mb-4">
              <h4 className="font-bold mb-2">تعليمات خاصة:</h4>
              <textarea 
                className="w-full bg-black/20 rounded-lg p-3 text-sm resize-none"
                placeholder="أضف أي تعليمات خاصة هنا..."
                rows={2}
              ></textarea>
            </div>
          </div>
        </div>
        
        {/* Add to Cart Section */}
        <div className={`absolute bottom-0 left-0 right-0 ${headerColor} p-4`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <button className={`${accentColor} rounded-full w-8 h-8 flex items-center justify-center`}>
                <Minus className="h-4 w-4 text-white" />
              </button>
              <span className={`font-bold ${textColor}`}>1</span>
              <button className={`${accentColor} rounded-full w-8 h-8 flex items-center justify-center`}>
                <Plus className="h-4 w-4 text-white" />
              </button>
            </div>
            <div className="font-bold text-xl text-orange-500">65 ريال</div>
          </div>
          <button className={`w-full ${accentColor} text-white py-2 rounded-full font-bold flex items-center justify-center`}>
            <span>إضافة إلى السلة</span>
            <ShoppingCart className="mr-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

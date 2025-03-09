import React from "react"
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import { FaUtensils } from "react-icons/fa"

interface CartPageMockupProps {
  className?: string
  textColor?: string
  bgColor?: string
  accentColor?: string
  headerColor?: string
}

export default function CartPageMockup({
  className = "",
  textColor = "text-white",
  bgColor = "bg-gray-900",
  accentColor = "bg-orange-500",
  headerColor = "bg-gray-800",
}: CartPageMockupProps) {
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "برجر لحم أنجوس",
      description: "برجر لحم أنجوس مع جبنة شيدر وصلصة خاصة",
      price: 65,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "سلطة سيزر",
      description: "خس روماني مع صلصة سيزر وقطع خبز محمص",
      price: 35,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "عصير برتقال طازج",
      description: "عصير برتقال طبيعي 100%",
      price: 20,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const tax = subtotal * 0.15 // 15% tax
  const total = subtotal + tax

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
        
        {/* Cart Content */}
        <div className={`${bgColor} h-full`}>
          <div className="p-4 flex items-center justify-between border-b border-white/10">
            <h3 className={`text-lg font-bold ${textColor}`}>سلة التسوق</h3>
            <div className="flex items-center gap-2">
              <ShoppingCart className={`h-5 w-5 ${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`} />
              <span className={`${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>
                {cartItems.reduce((total, item) => total + item.quantity, 0)} عناصر
              </span>
            </div>
          </div>
          
          {/* Cart Items */}
          <div className={`p-4 overflow-y-auto ${textColor}`} style={{ height: "calc(100% - 280px)" }}>
            {cartItems.map((item) => (
              <div key={item.id} className="mb-4 bg-black/10 rounded-lg p-3">
                <div className="flex">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="mr-3 flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold">{item.name}</h4>
                      <button className={`text-red-500 p-1`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm opacity-70 line-clamp-1">{item.description}</p>
                    <div className="mt-1 font-bold text-orange-500">{item.price} ريال</div>
                  </div>
                </div>
                <div className="mt-2 flex justify-end items-center gap-3">
                  <button className={`${accentColor} rounded-full w-6 h-6 flex items-center justify-center`}>
                    <Minus className="h-3 w-3 text-white" />
                  </button>
                  <span className="font-bold">{item.quantity}</span>
                  <button className={`${accentColor} rounded-full w-6 h-6 flex items-center justify-center`}>
                    <Plus className="h-3 w-3 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className={`absolute bottom-0 left-0 right-0 ${headerColor} p-4 rounded-t-xl`}>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className={`${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>المجموع الفرعي:</span>
                <span className={`font-bold ${textColor}`}>{subtotal} ريال</span>
              </div>
              <div className="flex justify-between">
                <span className={`${textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>الضريبة (15%):</span>
                <span className={`font-bold ${textColor}`}>{tax.toFixed(2)} ريال</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10">
                <span className={`font-bold ${textColor}`}>الإجمالي:</span>
                <span className={`font-bold text-orange-500`}>{total.toFixed(2)} ريال</span>
              </div>
            </div>
            <button className={`w-full ${accentColor} text-white py-2 rounded-full font-bold flex items-center justify-center`}>
              <span>متابعة الدفع</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

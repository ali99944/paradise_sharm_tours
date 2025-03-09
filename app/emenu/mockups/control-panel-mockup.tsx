import React from "react"
import { LayoutGrid, ShoppingCart, Settings, BarChart2, Users, Bell, Search, PlusCircle, Edit, Trash2, Filter, ChevronDown, Eye, DollarSign, Clock } from 'lucide-react'
import { FaUtensils } from "react-icons/fa"

interface ControlPanelMockupProps {
  className?: string
}

export default function ControlPanelMockup({ className = "" }: ControlPanelMockupProps) {
  return (
    <div className={`bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl ${className}`}>
      {/* Header */}
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <FaUtensils className="text-orange-500 mr-2" size={24} />
          <span className="font-bold text-white text-lg">لوحة تحكم المطعم</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-gray-700 p-2 rounded-full relative">
            <Bell className="h-5 w-5 text-gray-300" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
          </button>
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-black font-bold">م</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex h-[500px]">
        {/* Sidebar */}
        <div className="w-1/5 bg-gray-800 p-4 space-y-2">
          <div className="bg-orange-500 text-white p-3 rounded flex items-center">
            <LayoutGrid className="h-5 w-5 ml-2" />
            <span>القائمة</span>
          </div>
          <div className="text-gray-300 p-3 rounded hover:bg-gray-700 flex items-center">
            <ShoppingCart className="h-5 w-5 ml-2" />
            <span>الطلبات</span>
          </div>
          <div className="text-gray-300 p-3 rounded hover:bg-gray-700 flex items-center">
            <Users className="h-5 w-5 ml-2" />
            <span>العملاء</span>
          </div>
          <div className="text-gray-300 p-3 rounded hover:bg-gray-700 flex items-center">
            <BarChart2 className="h-5 w-5 ml-2" />
            <span>التقارير</span>
          </div>
          <div className="text-gray-300 p-3 rounded hover:bg-gray-700 flex items-center">
            <Settings className="h-5 w-5 ml-2" />
            <span>الإعدادات</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="w-4/5 p-6 overflow-y-auto">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">إدارة القائمة</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="بحث..." 
                  className="bg-gray-800 text-white pr-10 pl-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <PlusCircle className="h-5 w-5" />
                <span>إضافة طبق</span>
              </button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-orange-500/20 p-2 rounded">
                  <LayoutGrid className="h-6 w-6 text-orange-500" />
                </div>
                <div className="text-right">
                  <span className="text-gray-400 text-sm">إجمالي الأطباق</span>
                  <div className="text-2xl font-bold text-white">48</div>
                </div>
              </div>
              <div className="text-green-500 text-sm flex items-center justify-end">
                <span>+3 هذا الشهر</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-blue-500/20 p-2 rounded">
                  <ShoppingCart className="h-6 w-6 text-blue-500" />
                </div>
                <div className="text-right">
                  <span className="text-gray-400 text-sm">الطلبات اليوم</span>
                  <div className="text-2xl font-bold text-white">24</div>
                </div>
              </div>
              <div className="text-green-500 text-sm flex items-center justify-end">
                <span>+12% من أمس</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-green-500/20 p-2 rounded">
                  <DollarSign className="h-6 w-6 text-green-500" />
                </div>
                <div className="text-right">
                  <span className="text-gray-400 text-sm">إيرادات اليوم</span>
                  <div className="text-2xl font-bold text-white">2,450 ريال</div>
                </div>
              </div>
              <div className="text-green-500 text-sm flex items-center justify-end">
                <span>+8% من أمس</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-purple-500/20 p-2 rounded">
                  <Clock className="h-6 w-6 text-purple-500" />
                </div>
                <div className="text-right">
                  <span className="text-gray-400 text-sm">متوسط وقت التحضير</span>
                  <div className="text-2xl font-bold text-white">18 دقيقة</div>
                </div>
              </div>
              <div className="text-green-500 text-sm flex items-center justify-end">
                <span>-2 دقيقة من أمس</span>
              </div>
            </div>
          </div>
          
          {/* Filters */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>تصفية</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="flex flex-row-reverse">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-r-none rounded-lg">الكل</button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-none border-l border-gray-700">الأطباق الرئيسية</button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-none border-l border-gray-700">المقبلات</button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-l-none rounded-lg">المشروبات</button>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>ترتيب حسب:</span>
              <select className="bg-gray-800 text-white px-3 py-2 rounded-lg focus:outline-none">
                <option>الأكثر مبيعاً</option>
                <option>السعر (الأعلى)</option>
                <option>السعر (الأقل)</option>
                <option>الأحدث</option>
              </select>
            </div>
          </div>
          
          {/* Menu Items Table */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full text-white">
              <thead>
                <tr className="bg-gray-700">
                  <th className="p-3 text-right">الصورة</th>
                  <th className="p-3 text-right">اسم الطبق</th>
                  <th className="p-3 text-right">الفئة</th>
                  <th className="p-3 text-right">السعر</th>
                  <th className="p-3 text-right">الحالة</th>
                  <th className="p-3 text-right">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-3">
                    <img src="/placeholder.svg?height=40&width=40" alt="برجر" className="w-10 h-10 rounded object-cover" />
                  </td>
                  <td className="p-3 font-medium">برجر لحم أنجوس</td>
                  <td className="p-3 text-gray-300">الأطباق الرئيسية</td>
                  <td className="p-3 font-medium">65 ريال</td>
                  <td className="p-3">
                    <span className="bg-green-500/20 text-green-500 px-2 py-1 rounded-full text-xs">متاح</span>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button className="bg-blue-500/20 text-blue-500 p-1 rounded">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="bg-orange-500/20 text-orange-500 p-1 rounded">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="bg-red-500/20 text-red-500 p-1 rounded">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3">
                    <img src="/placeholder.svg?height=40&width=40" alt="سلطة" className="w-10 h-10 rounded object-cover" />
                  </td>
                  <td className="p-3 font-medium">سلطة سيزر</td>
                  <td className="p-3 text-gray-300">المقبلات</td>
                  <td className="p-3 font-medium">35 ريال</td>
                  <td className="p-3">
                    <span className="bg-green-500/20 text-green-500 px-2 py-1 rounded-full text-xs">متاح</span>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button className="bg-blue-500/20 text-blue-500 p-1 rounded">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="bg-orange-500/20 text-orange-500 p-1 rounded">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="bg-red-500/20 text-red-500 p-1 rounded">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3">
                    <img src="/placeholder.svg?height=40&width=40" alt="عصير" className="w-10 h-10 rounded object-cover" />
                  </td>
                  <td className="p-3 font-medium">عصير برتقال طازج</td>
                  <td className="p-3 text-gray-300">المشروبات</td>
                  <td className="p-3 font-medium">20 ريال</td>
                  <td className="p-3">
                    <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded-full text-xs">موسمي</span>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button className="bg-blue-500/20 text-blue-500 p-1 rounded">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="bg-orange-500/20 text-orange-500 p-1 rounded">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="bg-red-500/20 text-red-500 p-1 rounded">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <img src="/placeholder.svg?height=40&width=40" alt="براوني" className="w-10 h-10 rounded object-cover" />
                  </td>
                  <td className="p-3 font-medium">براوني بالآيس كريم</td>
                  <td className="p-3 text-gray-300">الحلويات</td>
                  <td className="p-3 font-medium">35 ريال</td>
                  <td className="p-3">
                    <span className="bg-red-500/20 text-red-500 px-2 py-1 rounded-full text-xs">غير متاح</span>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button className="bg-blue-500/20 text-blue-500 p-1 rounded">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="bg-orange-500/20 text-orange-500 p-1 rounded">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="bg-red-500/20 text-red-500 p-1 rounded">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-400">عرض 1-4 من 48 طبق</div>
            <div className="flex gap-1">
              <button className="bg-gray-800 text-white px-3 py-1 rounded">السابق</button>
              <button className="bg-orange-500 text-white px-3 py-1 rounded">1</button>
              <button className="bg-gray-800 text-white px-3 py-1 rounded">2</button>
              <button className="bg-gray-800 text-white px-3 py-1 rounded">3</button>
              <button className="bg-gray-800 text-white px-3 py-1 rounded">التالي</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

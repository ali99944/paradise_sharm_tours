"use client"

import { useState } from "react"
import {
  Activity,
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  Film,
  Image,
  Layers,
  LayoutDashboard,
  MessageSquare,
  Plus,
  Search,
  Settings,
  ShoppingBag,
  Smartphone,
  Users,
  Zap,
  Check,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

// Chart component (simplified for demo)
const AreaChart = ({ className }: { className?: string }) => (
  <div className={cn("w-full h-[200px] flex items-end gap-1", className)}>
    {Array.from({ length: 30 }).map((_, i) => {
      const height = Math.max(15, Math.floor(Math.random() * 100))
      return (
        <div
          key={i}
          className="bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-sm w-full"
          style={{ height: `${height}%` }}
        ></div>
      )
    })}
  </div>
)

const BarChart = ({ className }: { className?: string }) => (
  <div className={cn("w-full h-[200px] flex items-end gap-2", className)}>
    {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, i) => {
      const height = Math.max(20, Math.floor(Math.random() * 100))
      return (
        <div key={i} className="flex flex-col items-center gap-2 flex-1">
          <div
            className="bg-gradient-to-t from-primary/80 to-primary w-full rounded-t-sm"
            style={{ height: `${height}%` }}
          ></div>
          <span className="text-xs text-muted-foreground">{month}</span>
        </div>
      )
    })}
  </div>
)
// Recent projects data
const recentProjects = [
  {
    id: 1,
    name: "مطعم الشرق - قائمة إلكترونية",
    client: "مطعم الشرق",
    status: "مكتمل",
    statusColor: "bg-green-500",
    date: "2023-06-15",
    progress: 100,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "شركة النور - هوية بصرية",
    client: "شركة النور",
    status: "قيد التنفيذ",
    statusColor: "bg-orange-500",
    date: "2023-06-10",
    progress: 75,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "متجر الأناقة - موقع إلكتروني",
    client: "متجر الأناقة",
    status: "قيد التنفيذ",
    statusColor: "bg-orange-500",
    date: "2023-06-05",
    progress: 45,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "مقهى السعادة - بطاقات أعمال",
    client: "مقهى السعادة",
    status: "مكتمل",
    statusColor: "bg-green-500",
    date: "2023-06-01",
    progress: 100,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "شركة المستقبل - فيديو إعلاني",
    client: "شركة المستقبل",
    status: "قيد المراجعة",
    statusColor: "bg-blue-500",
    date: "2023-05-28",
    progress: 90,
    image: "/placeholder.svg?height=40&width=40",
  },
]

// Recent notifications data
const notifications = [
  {
    id: 1,
    title: "تم الانتهاء من مشروع مطعم الشرق",
    description: "تم الانتهاء من تصميم القائمة الإلكترونية لمطعم الشرق",
    time: "منذ ساعتين",
    read: false,
  },
  {
    id: 2,
    title: "تعليق جديد من العميل",
    description: "أضاف عميل شركة النور تعليقًا جديدًا على التصميم",
    time: "منذ 5 ساعات",
    read: false,
  },
  {
    id: 3,
    title: "موعد اجتماع غدًا",
    description: "لديك اجتماع مع فريق متجر الأناقة غدًا الساعة 10 صباحًا",
    time: "منذ يوم",
    read: true,
  },
  {
    id: 4,
    title: "تم استلام دفعة جديدة",
    description: "تم استلام الدفعة الأولى من مشروع شركة المستقبل",
    time: "منذ يومين",
    read: true,
  },
]

// Navigation items
const navItems = [
  { icon: <LayoutDashboard size={20} />, label: "لوحة التحكم", active: true },
  { icon: <ShoppingBag size={20} />, label: "المشاريع", active: false },
  { icon: <Users size={20} />, label: "العملاء", active: false },
  { icon: <MessageSquare size={20} />, label: "الرسائل", active: false },
  { icon: <Film size={20} />, label: "الفيديوهات", active: false },
  { icon: <Image size={20} />, label: "التصاميم", active: false },
  { icon: <Smartphone size={20} />, label: "المواقع", active: false },
  { icon: <CreditCard size={20} />, label: "الفواتير", active: false },
  { icon: <Settings size={20} />, label: "الإعدادات", active: false },
]

export default function DashboardPage() {
  const { setTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-20"} border-r transition-all duration-300 hidden md:block`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 flex items-center justify-center">
            {sidebarOpen ? (
              <h1 className="text-xl font-bold">Source Media</h1>
            ) : (
              <h1 className="text-xl font-bold">SM</h1>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6">
            <ul className="space-y-1 px-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Button
                    variant={item.active ? "default" : "ghost"}
                    className={`w-full justify-${sidebarOpen ? "start" : "center"} h-10`}
                  >
                    {item.icon}
                    {sidebarOpen && <span className="mr-3">{item.label}</span>}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          {/* User */}
          <div className="p-4 border-t">
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              {sidebarOpen && (
                <div className="mr-3">
                  <p className="text-sm font-medium">أحمد محمد</p>
                  <p className="text-xs text-muted-foreground">مدير</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b">
          <div className="flex h-16 items-center px-4 md:px-6">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Layers className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Layers className="h-5 w-5" />
              <span className="sr-only">Toggle Sidebar</span>
            </Button>

            <div className="mr-auto flex items-center gap-4">
              <div className="relative">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-orange-500" />
                  <span className="sr-only">Notifications</span>
                </Button>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>الإعدادات</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setTheme("light")}>وضع النهار</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>وضع الليل</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>إعدادات النظام</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          <div className="flex flex-col gap-6">
            {/* Page Title */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">مرحبًا، أحمد 👋</h1>
                <p className="text-muted-foreground">هذه نظرة عامة على أداء شركتك وآخر المشاريع.</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="بحث..." className="w-full md:w-[200px] pl-8 rounded-lg" />
                </div>
                <Button>
                  <Plus className="ml-2 h-4 w-4" />
                  مشروع جديد
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">إجمالي الإيرادات</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45,231 ريال</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <span className="text-green-500 flex items-center">
                      <Zap className="h-3 w-3 ml-1" />
                      +20.1%
                    </span>
                    مقارنة بالشهر الماضي
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">المشاريع النشطة</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <span className="text-green-500 flex items-center">
                      <Zap className="h-3 w-3 ml-1" />
                      +2
                    </span>
                    مقارنة بالشهر الماضي
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">العملاء الجدد</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+8</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <span className="text-green-500 flex items-center">
                      <Zap className="h-3 w-3 ml-1" />
                      +12.5%
                    </span>
                    مقارنة بالشهر الماضي
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">معدل إكمال المشاريع</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <span className="text-green-500 flex items-center">
                      <Zap className="h-3 w-3 ml-1" />
                      +3%
                    </span>
                    مقارنة بالشهر الماضي
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>نظرة عامة على الإيرادات</CardTitle>
                </CardHeader>
                <CardContent>
                  <AreaChart />
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">

                <CardContent className="flex justify-center">
                  <BarChart/>
                </CardContent>
              </Card>
            </div>

            {/* Recent Projects and Activity */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader className="flex flex-row items-center">
                  <div>
                    <CardTitle>المشاريع الأخيرة</CardTitle>
                    <CardDescription>إجمالي 5 مشاريع نشطة</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="mr-auto">
                    عرض الكل
                    <span className="sr-only">View all projects</span>
                  </Button>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[350px]">
                    <div className="space-y-4">
                      {recentProjects.map((project) => (
                        <div key={project.id} className="flex items-center">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={project.image} alt={project.name} />
                            <AvatarFallback>{project.client.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="mr-4 space-y-1 flex-1">
                            <p className="text-sm font-medium leading-none">{project.name}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>{project.client}</span>
                              <span className="mx-1">•</span>
                              <Badge variant="outline" className={`${project.statusColor} text-white text-[10px] h-5`}>
                                {project.status}
                              </Badge>
                            </div>
                            <Progress value={project.progress} className="h-1 mt-2" />
                          </div>
                          <Button variant="ghost" size="icon">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <Settings className="h-4 w-4" />
                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>عرض التفاصيل</DropdownMenuItem>
                                <DropdownMenuItem>تعديل</DropdownMenuItem>
                                <DropdownMenuItem>حذف</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <div className="lg:col-span-3 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>الإشعارات الأخيرة</CardTitle>
                    <CardDescription>لديك 4 إشعارات جديدة</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-4">
                        {notifications.map((notification) => (
                          <div key={notification.id} className="flex items-start">
                            <div
                              className={`w-2 h-2 mt-2 rounded-full ${notification.read ? "bg-muted" : "bg-orange-500"} ml-3`}
                            />
                            <div>
                              <p className="text-sm font-medium">{notification.title}</p>
                              <p className="text-xs text-muted-foreground">{notification.description}</p>
                              <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>المهام القادمة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-5 h-5 border border-primary rounded-sm ml-3 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">اجتماع مع فريق التصميم</p>
                          <p className="text-xs text-muted-foreground">اليوم، 14:00</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Calendar className="h-4 w-4" />
                        </Button>
                      </div>
                      <Separator />
                      <div className="flex items-center">
                        <div className="w-5 h-5 border border-muted rounded-sm ml-3"></div>
                        <div className="flex-1">
                          <p className="text-sm">تسليم مشروع شركة النور</p>
                          <p className="text-xs text-muted-foreground">غدًا، 10:00</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Calendar className="h-4 w-4" />
                        </Button>
                      </div>
                      <Separator />
                      <div className="flex items-center">
                        <div className="w-5 h-5 border border-muted rounded-sm ml-3"></div>
                        <div className="flex-1">
                          <p className="text-sm">مراجعة تصميمات متجر الأناقة</p>
                          <p className="text-xs text-muted-foreground">الخميس، 13:00</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Calendar className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">إضافة مشروع</CardTitle>
                  <Plus className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">إنشاء مشروع جديد وتعيين فريق العمل</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">
                    إضافة
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">إضافة عميل</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">إضافة عميل جديد وإدارة بياناته</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">
                    إضافة
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">إنشاء فاتورة</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">إنشاء فاتورة جديدة وإرسالها للعميل</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">
                    إنشاء
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">تقارير الأداء</CardTitle>
                  <Download className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">تحميل تقارير الأداء والإحصائيات</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">
                    تحميل
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { GridCardLoader } from "@/src/components/shared/grid_card_loader"
import useGetServerData from "@/src/hooks/use-get-server-data"
import { getAllTours, deleteTour } from "@/src/server-actions/tour-actions"
import { Check, Edit, Map, Plus, Trash } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import useServerAction from "@/src/hooks/use-server-action"

export default function DashboardTours() {
  const { data, isLoading, refetch } = useGetServerData(getAllTours, [])
  const [tourToDelete, setTourToDelete] = useState<number | null>(null)
  const deleteTourAction = useServerAction(deleteTour)

  const handleDelete = async () => {
    if (tourToDelete) {
      await deleteTourAction.mutation(tourToDelete, {
        onSuccess: () => {
          setTourToDelete(null)
          refetch()
        },
        onFailure: (error) => {
          alert(error)
        },
      })
    }
  }

  if (isLoading) {
    return <GridCardLoader />
  }

  return (
    <div className="p-4">
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!tourToDelete} onOpenChange={(open) => !open && setTourToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the tour.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Featured Experiences</h3>
        <Link href="/dashboard/tours/create">
          <Button>
            Create Tour
            <Plus className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((tour) => (
          <Card key={tour.id} className="group overflow-hidden rounded bg-white">
            <div className="relative h-auto overflow-hidden">
              <img
                src={tour.main_image || "/placeholder.svg"}
                alt={tour.name}
                className="object-cover group-hover:scale-105 h-full transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <Badge className="bg-white/90 text-gray-900">{tour.duration}</Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-primary">{tour.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Map className="h-4 w-4 text-primary" />
                    {tour.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">${tour.price_per_person}</div>
                  <div className="text-sm text-gray-600">per person</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {tour.includes.map((include, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-orange-500" />
                    {include.name}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-x-2 justify-end w-full">
                <Link href={`/dashboard/tours/edit/${tour.id}`}>
                  <Button className="w-full">
                    Edit
                    <Edit className="w-4 h-4" />
                  </Button>
                </Link>
                <Button
                  className="w-full bg-destructive hover:bg-destructive/90"
                  onClick={() => setTourToDelete(tour.id)}
                >
                  Delete
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
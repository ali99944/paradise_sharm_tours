'use client'

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { GridCardLoader } from '@/src/components/shared/grid_card_loader';
import useGetServerData from '@/src/hooks/use-get-server-data';
import useServerAction from '@/src/hooks/use-server-action';
import { getAllSeoContents, updateSeoContent } from '@/src/server-actions/seo-actions';
import { AvailableSeo, SeoContent } from '@/src/types';
import { Edit } from 'lucide-react';
import { useState } from 'react';

const CustomizeSeo = () => {
  const { data: seo_contents, isLoading, refetch } = useGetServerData(getAllSeoContents, [])
   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
   const [selectedSeoContent, setSelectedSeoContent] = useState<SeoContent | null>(null)

  const [newName, setNewName] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newKeywords, setNewKeywords] = useState('')

  const openEditDialog = (content: SeoContent) => {
    setSelectedSeoContent(content);
    setNewName(content.name);
    setNewDescription(content.description);
    setNewKeywords(content.keywords);
    setIsEditDialogOpen(true);
  };

  const updateSeoAction = useServerAction(updateSeoContent)

  const handleUpdateSeo = async () => {
    await updateSeoAction.mutation({
      name: newName,
      description: newDescription,
      keywords: newKeywords,

      key: selectedSeoContent?.key as AvailableSeo
    }, {
      onSuccess() {
        refetch()
      }
    })
  }

  if(isLoading) {
    return <GridCardLoader />
  }

  return (
      <div className="p-4">
        {/* Page Settings Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Website Seo Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                seo_contents.map((content) => (
                  <Card key={content.id}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>
                        <p className='mb-2 rounded-full py-1 px-2 text-xs w-fit bg-primary text-white'>{content.key}</p>
                        {content.name}
                      </CardTitle>
                      <div className="flex gap-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => openEditDialog(content)}
                        >
                          <Edit className="h-4 w-4 text-primary" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{content.description}</p>
                    <p className='mt-2 flex gap-x-2 text-black'>{
                        content.keywords.split(',').map(part => {
                          return (
                            <div className='p-1 rounded bg-gray-300' key={part}>
                              {part}
                            </div>
                          )
                        })
                      }</p>
                  </CardContent>
                </Card>
                ))
            }
          </div>
        </div>

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Seo for &quot;{selectedSeoContent?.key}&quot;</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Enter seo name"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Enter seo description"
                />
              </div>
              <div>
                <Label htmlFor="keywords">Keywords (separated with comma)</Label>
                <Textarea
                  id="keywords"
                  value={newKeywords}
                  onChange={(e) => setNewKeywords(e.target.value)}
                  placeholder="Enter seo keywords"
                />
              </div>
              <Button onClick={handleUpdateSeo}>Update FAQ</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      
  );
};

export default CustomizeSeo;
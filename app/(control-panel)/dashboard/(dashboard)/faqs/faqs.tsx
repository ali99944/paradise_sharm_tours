'use client'

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Edit, Trash } from 'lucide-react';
import { GridCardLoader } from '@/src/components/shared/grid_card_loader';
import useGetServerData from '@/src/hooks/use-get-server-data';
import { createFaq, deleteFaq, getAllFaqs, updateFaq } from '@/src/server-actions/faq-actions';
import useServerAction from '@/src/hooks/use-server-action';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}


const FAQDashboard = () => {
  const { data: faqs, isLoading, refetch } = useGetServerData(getAllFaqs, [])



  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState<FAQ | null>(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const addFaqMutation = useServerAction(createFaq)

  const updateFaqMutation = useServerAction(updateFaq)

  const deleteFAQ = useServerAction(deleteFaq)

  const handleAddFAQ = async () => {
    if (newQuestion.trim() && newAnswer.trim()) {

    await addFaqMutation.mutation({ question: newQuestion, answer: newAnswer }, {
        onSuccess() {
            setNewQuestion('');
            setNewAnswer('');
            setIsAddDialogOpen(false);
            refetch();
        },
        onFailure(error) {
            console.error('Error adding FAQ:', error);
        }
    })
    }
  };

  const handleUpdateFAQ = async () => {
    if (selectedFAQ && newQuestion.trim() && newAnswer.trim()) {
    //   setSelectedFAQ(null);
    //   setNewQuestion('');
    //   setNewAnswer('');
    //   setIsEditDialogOpen(false);

      await updateFaqMutation.mutation({
        question: newQuestion, answer: newAnswer, id: selectedFAQ.id
      }, {
        onSuccess() {
          setNewQuestion('');
          setNewAnswer('');
          setIsEditDialogOpen(false);
          refetch();
        },
        onFailure(error) {
          console.error('Error updating FAQ:', error);
        }
      })
    }
  };

  const handleDeleteFAQ = async () => {
    if (selectedFAQ) {
    //   await deleteFAQ(selectedFAQ.id);
    //   setSelectedFAQ(null);
    //   setIsDeleteDialogOpen(false);

      await deleteFAQ.mutation({ id: selectedFAQ.id }, {
        onSuccess() {
          setSelectedFAQ(null);
          setIsDeleteDialogOpen(false);
          refetch();
        },
        onFailure(error) {
          console.error('Error deleting FAQ:', error);
        }
      })
    }
  };

  const openEditDialog = (faq: FAQ) => {
    setSelectedFAQ(faq);
    setNewQuestion(faq.question);
    setNewAnswer(faq.answer);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (faq: FAQ) => {
    setSelectedFAQ(faq);
    setIsDeleteDialogOpen(true);
  };

  if(isLoading) {
    return <GridCardLoader />
  }

  return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">FAQ Dashboard</h1>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-semibold">Frequently Asked Questions</div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>Add FAQ</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New FAQ</DialogTitle>
                <DialogDescription>Enter the question and answer for the new FAQ.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="question">Question</Label>
                  <Input
                    id="question"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Enter the question"
                  />
                </div>
                <div>
                  <Label htmlFor="answer">Answer</Label>
                  <Textarea
                    id="answer"
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder="Enter the answer"
                  />
                </div>
                <Button onClick={handleAddFAQ}>Save FAQ</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {(faqs ?? []).length > 0 ? (
            (faqs ?? []).map((faq) => (
              <Card key={faq.id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{faq.question}</CardTitle>
                    <div className="flex gap-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openEditDialog(faq)}
                      >
                        <Edit className="h-4 w-4 text-primary" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openDeleteDialog(faq)}
                      >
                        <Trash className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{faq.answer}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-gray-500">No FAQs found. Add a new FAQ to get started.</p>
          )}
        </div>

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit FAQ</DialogTitle>
              <DialogDescription>Update the question and answer for this FAQ.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="question">Question</Label>
                <Input
                  id="question"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="Enter the question"
                />
              </div>
              <div>
                <Label htmlFor="answer">Answer</Label>
                <Textarea
                  id="answer"
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  placeholder="Enter the answer"
                />
              </div>
              <Button onClick={handleUpdateFAQ}>Update FAQ</Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the FAQ.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteFAQ}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
  );
};

export default FAQDashboard;
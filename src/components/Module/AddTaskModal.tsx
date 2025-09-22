import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useForm } from "react-hook-form"

export function AddTaskModal() {

    const form= useForm()

    const onSubmit=(data: any)=>
    {
        console.log(data)
    }

  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
    <Form {...form}> 

        <form onSubmit={form.handleSubmit(onSubmit)} action="">
            <FormField
    control={form.control}
    name="title"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
          <Input {...field}></Input>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
   <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
  </form>   

</Form>
         
        </DialogContent>
    </Dialog>
  )
}

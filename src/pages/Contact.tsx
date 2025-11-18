import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useCreateUserQueryMutation } from "@/redux/features/user/user.api";
import type { IErrorResponse } from "@/types";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const [createUserQuery] = useCreateUserQueryMutation();

  const onSubmit = async (data: ContactFormData) => {
    const toastId = toast.loading("Sending Your Message...");
    try {
      const userQuery = await createUserQuery(data).unwrap();
      if (userQuery.success) {
        toast.success("Your message has been sent successfully!", {
          id: toastId,
        });
      }
      form.reset();
    } catch (error: unknown) {
      const err = error as IErrorResponse;
      toast.error(err?.data?.message, { id: toastId });
    }
  };

  return (
    <div className=" py-20 container mx-auto">
      <title>GoTogether-Contact-Page</title>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base">
          Have questions or need assistance? Send us a message and we’ll get
          back to you shortly.
        </p>
      </div>
      <Form {...form}>
        <form
          className="max-w-xl mx-auto bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border border-white/20 p-8 rounded-lg space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="pb-1">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  This is your public name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="pb-1">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your Email" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  This is your public email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="pb-1">Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your Message" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  This is your public message.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-center">
            <Button type="submit">"Send Message"</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

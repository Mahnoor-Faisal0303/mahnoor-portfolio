import { Button } from "../../components/ui/button";
import { Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { profile } from "@/data/portfolio";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  first_name: z
    .string({ required_error: "First Name is required" })
    .nonempty("First Name is required"),
  last_name: z
    .string({ required_error: "Last Name is required" })
    .nonempty("Last Name is required"),
  email: z
    .string({ required_error: "Email is required" })
    .nonempty("Email is required")
    .email("Please enter a valid email"),
  message: z
    .string({ required_error: "Message is required" })
    .min(10, "Message must be at least 10 characters"),
});

export function ContactCard() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${profile.email}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: `${data.first_name} ${data.last_name}`,
            email: data.email,
            message: data.message,
            _subject: `Portfolio message from ${data.first_name} ${data.last_name}`,
            _replyto: data.email,
            _captcha: "false",
            _template: "table",
          }),
        },
      );
      const result = await res.json().catch(() => ({}));
      if (!res.ok || result.success === "false" || result.success === false) {
        throw new Error(result.message || `Request failed (${res.status})`);
      }
      toast("Message Sent!", {
        description: "Your message was sent successfully.",
      });
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message", {
        description: "Please try again later or email me directly.",
      });
    }
  };

  const inputClass =
    "p-6 bg-[#0b0314]/60 border border-[#693B93] placeholder:text-gray-500 hover:!border-purple-400 focus:!border-cyan-400 focus:!ring-2 focus:!ring-cyan-400/20 focus:!outline-none transition-all";
  const labelClass = "text-purple-200";

  return (
    <div className="exp-card relative flex flex-1 w-full rounded-2xl p-px bg-gradient-to-br from-purple-500/60 via-[#693B93]/40 to-cyan-400/60 shadow-xl">
      <div className="relative flex flex-1 flex-col overflow-hidden rounded-[15px] bg-gradient-to-br from-[#130428] via-[#2a0e52] to-[#190634] text-white">
        <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-purple-500/25 blur-3xl" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative flex flex-1 flex-col gap-5 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter first name" {...field} className={inputClass} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter last name" {...field} className={inputClass} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} className={inputClass} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col">
                  <FormLabel className={labelClass}>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message..."
                      rows={5}
                      {...field}
                      className={`${inputClass} min-h-[140px] flex-1 resize-none`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="group w-full text-md p-6 bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-700/40 hover:cursor-pointer transition-all"
            >
              {form.formState.isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send message
                  <Send className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

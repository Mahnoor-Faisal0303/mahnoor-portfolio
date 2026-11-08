import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
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

  return (
    <Card className="w-full max-w-xl bg-gradient-to-r from-[#130428] via-[#38126D] to-[#190634] shadow-xl border border-[#693B93] backdrop-blur-md text-white">
      <CardContent className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6 px-6 py-8"
          >
            {/* First Name */}
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter first name"
                      {...field}
                      className="p-6 border border-white hover:!border-cyan-400 focus:!border-cyan-400 focus:!ring-0 focus:!outline-none transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter last name"
                      {...field}
                      className="p-6 border border-white hover:!border-cyan-400 focus:!border-cyan-400 focus:!ring-0 focus:!outline-none transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter email"
                      {...field}
                      className="p-6 border border-white hover:!border-cyan-400 focus:!border-cyan-400 focus:!ring-0 focus:!outline-none transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message..."
                      rows={4}
                      {...field}
                      className="p-6 border border-white hover:!border-cyan-400 focus:!border-cyan-400 focus:!ring-0 focus:!outline-none transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="bg-blue-800 hover:bg-blue-700 hover:cursor-pointer w-full text-md p-6"
              >
                {form.formState.isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </div>
          </form>
        </Form>

        <div className="flex justify-center flex-wrap gap-4 my-4 mx-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white rounded hover:border-cyan-400 hover:text-cyan-400 transition rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white rounded hover:border-cyan-400 hover:text-cyan-400 transition rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-.98 1.82-2.2 3.75-2.2 4 0 4.74 2.63 4.74 6.05V24h-4v-8.45c0-2.02-.04-4.62-2.82-4.62s-3.25 2.2-3.25 4.47V24h-4V8z" />
            </svg>
            LinkedIn
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-4 py-2 border border-white rounded hover:border-cyan-400 hover:text-cyan-400 transition rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M2 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H2zm10 9L2 6h20l-10 7zm0 2l10-7v11H2V8l10 7z" />
            </svg>
            {profile.email}
          </a>

          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-2 px-4 py-2 border border-white rounded hover:border-cyan-400 hover:text-cyan-400 transition rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.48 2.53.73 3.88.73a1 1 0 011 1v3.5a1 1 0 01-1 1C10.3 22 2 13.7 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.25 2.67.73 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
            </svg>
            {profile.phoneDisplay}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

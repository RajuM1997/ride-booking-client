import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import Password from "@/components/ui/Password";
import type { IErrorResponse } from "@/types";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        error: "Name is to short",
      })
      .max(50, {
        error: "Name is too big",
      }),
    email: z.email(),
    password: z.string().min(8, {
      error: "Password is too short",
    }),
    confirmPassword: z.string().min(8, {
      error: "Confirm password is too short",
    }),
    licenseNumber: z.string(),
    vehicleType: z.string(),
    vehicleNumber: z.string(),
    address: z.string(),
    phone: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export function RegisterFormDriver({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      licenseNumber: "",
      vehicleType: "",
      vehicleNumber: "",
      address: "",
      phone: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      address: data.address,
      phone: data.phone,
      driver: {
        licenseNumber: data.licenseNumber,
        vehicleType: data.vehicleType,
        vehicleNumber: data.vehicleNumber,
        role: "DRIVER",
      },
    };
    const toastId = toast.loading("Login...");
    try {
      await register(userInfo).unwrap();

      toast.success("User created successfully", { id: toastId });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error: unknown) {
      const err = error as IErrorResponse;
      toast.error(err?.data?.errorSources[0]?.message, { id: toastId });
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 lg:px-7", className)} {...props}>
      <div className="flex flex-col items-center gap-2 py-5 text-center">
        <h1 className="text-2xl font-bold">Join Our Team of Trusted Drivers</h1>
        <p className="text-sm text-muted-foreground">
          Register your account to start earning with GoTogether. Enter your
          details below and become part of our reliable ride-sharing network.
        </p>
      </div>

      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="pb-1">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display name.
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
                      <Input
                        placeholder="john.doe@company.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="pb-1">Password</FormLabel>
                    <FormControl>
                      <Password {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="pb-1">Confirm Password</FormLabel>
                    <FormControl>
                      <Password {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="licenseNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="pb-1">License Number</FormLabel>
                    <FormControl>
                      <Input placeholder="license number" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display license number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicleType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="pb-1">Vehicle Type</FormLabel>
                    <FormControl>
                      <Input placeholder="vehicle type" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display vehicle type.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="pb-1">Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="017XXXXXXX" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display phone number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="pb-1">Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Dhaka, Mirpur 10" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
              <FormField
                control={form.control}
                name="vehicleNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="pb-1">Vehicle Number</FormLabel>
                    <FormControl>
                      <Input placeholder="vehicle number" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display vehicle number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full cursor-pointer"
        >
          Login with Google
        </Button>
      </div>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link to="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </div>
  );
}

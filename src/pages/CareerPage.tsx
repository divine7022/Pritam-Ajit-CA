import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Upload, CheckCircle, Mail, User, Phone } from "lucide-react";
import { toast } from "sonner";
import {
  sendCareerApplicationEmail,
  sendEmailViaBackend,
} from "@/lib/emailService";

interface CareerFormData {
  name: string;
  mobile: string;
  email: string;
  cv: FileList;
  resume: FileList;
}

const CareerPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CareerFormData>({
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
    },
  });

  const onSubmit = async (data: CareerFormData) => {
    setIsSubmitting(true);

    try {
      // Prepare email data
      const emailData = {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        cvFile: data.cv?.[0],
        resumeFile: data.resume?.[0],
      };

      // Send email to xyz@gmail.com
      // Option 1: Using EmailJS (uncomment the line below and configure EmailJS)
      // await sendCareerApplicationEmail(emailData);

      // Option 2: Using Backend Server (uncomment the line below and start backend server)
      await sendEmailViaBackend(emailData);

      // Show success message
      toast.success("Application submitted successfully!", {
        description:
          "We have received your application and sent a confirmation email to xyz@gmail.com",
        duration: 5000,
      });

      setIsSubmitted(true);

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit application", {
        description: "Please try again later or contact us directly",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-600">
                  Application Received!
                </CardTitle>
                <CardDescription className="text-lg">
                  Thank you for your interest in joining our team.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We have successfully received your job application and will
                  review it carefully.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Mail className="w-4 h-4" />
                  <span>
                    A confirmation email has been sent to xyz@gmail.com
                  </span>
                </div>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-4"
                >
                  Submit Another Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-gray-600">
              We're always looking for talented individuals to join our growing
              team. Submit your application below and take the first step
              towards an exciting career with us.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Job Application Form
              </CardTitle>
              <CardDescription>
                Please fill out all the required information below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Mobile Number Field */}
                  <FormField
                    control={form.control}
                    name="mobile"
                    rules={{
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit mobile number",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Mobile Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your 10-digit mobile number"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email address"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* CV Upload Field */}
                  <FormField
                    control={form.control}
                    name="cv"
                    rules={{ required: "CV is required" }}
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem>
                        <FormLabel>Upload CV *</FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-4">
                            <Input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={(e) => onChange(e.target.files)}
                              {...field}
                              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                        <p className="text-sm text-gray-500">
                          Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                        </p>
                      </FormItem>
                    )}
                  />

                  {/* Resume Upload Field */}
                  <FormField
                    control={form.control}
                    name="resume"
                    rules={{ required: "Resume is required" }}
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem>
                        <FormLabel>Upload Resume *</FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-4">
                            <Input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={(e) => onChange(e.target.files)}
                              {...field}
                              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                        <p className="text-sm text-gray-500">
                          Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                        </p>
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              By submitting this application, you agree to our terms and
              conditions. We will contact you if your profile matches our
              requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;

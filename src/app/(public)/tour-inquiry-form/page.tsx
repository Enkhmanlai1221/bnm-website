"use client";

import {
  PhoneIcon,
  EnvelopeIcon,
  UserIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import { Form } from "@/components/form";
import { TextField } from "@/components/form/text-field";
import { SelectField } from "@/components/form/select-field";
import TextareaField from "@/components/form/textarea-field";
import { DatePickerField } from "@/components/form/date-picker-field";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneCode: yup.string().required("Phone code is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  numberOfAdults: yup.string(),
  numberOfChildren: yup.string(),
  interestedTour: yup.string(),
  startDate: yup.string(),
  endDate: yup.string(),
  tourPackage: yup.string(),
  communicationPlatforms: yup.array().of(yup.string()),
  specificActivities: yup.string(),
  dietaryPreferences: yup.string(),
  additionalComments: yup.string(),
});

const initialValues = {
  name: "",
  email: "",
  phoneCode: "+976",
  phoneNumber: "",
  numberOfAdults: "",
  numberOfChildren: "",
  interestedTour: "",
  startDate: "",
  endDate: "",
  tourPackage: "",
  communicationPlatforms: [] as string[],
  specificActivities: "",
  dietaryPreferences: "",
  additionalComments: "",
};

const countryCodes = [
  { value: "+976", label: "🇲🇳 +976" },
  { value: "+1", label: "🇺🇸 +1" },
  { value: "+44", label: "🇬🇧 +44" },
  { value: "+86", label: "🇨🇳 +86" },
  { value: "+81", label: "🇯🇵 +81" },
  { value: "+82", label: "🇰🇷 +82" },
];

const numberOptions = Array.from({ length: 20 }, (_, i) => ({
  value: (i + 1).toString(),
  label: (i + 1).toString(),
}));

const tourOptions = [
  { value: "day-trip", label: "Day Trip" },
  { value: "multi-day", label: "Multi-Day Tour" },
  { value: "custom", label: "Custom Tour" },
];

const packageOptions = [
  { value: "basic", label: "Basic Package" },
  { value: "standard", label: "Standard Package" },
  { value: "premium", label: "Premium Package" },
  { value: "luxury", label: "Luxury Package" },
];

const communicationPlatforms = [
  "Email",
  "WhatsApp",
  "Instagram",
  "Facebook Messenger",
  "Viber",
  "Phone Number",
];

export default function TourInquiryFormPage() {
  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form submitted:", values);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mt-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Tour Inquiry Form
        </h1>

        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Personal Information
                </h2>

                {/* Name */}
                <TextField
                  name="name"
                  label="Name"
                  placeholder="Please enter your full name"
                  startContent={<UserIcon className="h-5 w-5 text-gray-400" />}
                />

                <TextField
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="Your email address"
                  startContent={
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  }
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone number
                  </label>
                  <div className="flex gap-2">
                    <SelectField
                      name="phoneCode"
                      options={countryCodes}
                      placeholder="Code"
                      classNames={{
                        base: "w-32",
                        trigger: "h-[48px]",
                      }}
                    />
                    <div className="flex-1">
                      <TextField
                        name="phoneNumber"
                        type="tel"
                        placeholder="Enter your phone number"
                        startContent={
                          <PhoneIcon className="h-5 w-5 text-gray-400" />
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tour Details Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Tour Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Number of Adults */}
                  <SelectField
                    name="numberOfAdults"
                    label="Number of Adults"
                    options={numberOptions}
                    placeholder="-"
                    classNames={{
                      trigger: "h-[48px]",
                    }}
                  />

                  {/* Number of Children */}
                  <SelectField
                    name="numberOfChildren"
                    label="Number of Children"
                    options={numberOptions}
                    placeholder="-"
                    classNames={{
                      trigger: "h-[48px]",
                    }}
                  />
                </div>

                {/* Interested Tour */}
                <SelectField
                  name="interestedTour"
                  label="Interested Tour"
                  options={tourOptions}
                  placeholder="-"
                  classNames={{
                    trigger: "h-[48px]",
                  }}
                />

                {/* Travel Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <DatePickerField
                      name="startDate"
                      label="Start dates"
                      classNames={{
                        base: "w-full",
                      }}
                    />
                  </div>

                  <div>
                    <DatePickerField
                      name="endDate"
                      label="End Date"
                      classNames={{
                        base: "w-full",
                      }}
                    />
                  </div>
                </div>

                {/* Tour Package Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tour Package Selection:
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    Choose Your Ideal Experience
                  </p>
                  <SelectField
                    name="tourPackage"
                    options={packageOptions}
                    placeholder="-"
                    classNames={{
                      trigger: "h-[48px]",
                    }}
                  />
                </div>
              </div>

              {/* Communication and Preferences Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Communication and Preferences
                </h2>

                {/* Preferred Platform for Communication */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Platform for Communication
                  </label>
                  <p className="text-sm text-gray-500 mb-4">
                    Please select how you'd like to communicate with us:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {communicationPlatforms.map((platform) => {
                      const isSelected = (
                        values.communicationPlatforms || []
                      ).includes(platform);
                      return (
                        <button
                          key={platform}
                          type="button"
                          onClick={() => {
                            const currentPlatforms =
                              values.communicationPlatforms || [];
                            const newPlatforms = isSelected
                              ? currentPlatforms.filter(
                                  (p: string) => p !== platform,
                                )
                              : [...currentPlatforms, platform];
                            setFieldValue(
                              "communicationPlatforms",
                              newPlatforms,
                            );
                          }}
                          className={`flex items-center justify-between px-4 py-3 border-2 rounded-lg transition-all duration-200 ${
                            isSelected
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          <span className="text-sm font-medium">
                            {platform}
                          </span>
                          <PlusIcon
                            className={`h-5 w-5 ${
                              isSelected ? "text-blue-500" : "text-gray-400"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Specific Activities */}
                <TextareaField
                  name="specificActivities"
                  label="Any Specific Activities or Experiences You Want to Include?"
                  placeholder="e.g. camel riding, horseback riding, reindeer herding, etc."
                  rows={4}
                />

                {/* Dietary Preferences */}
                <TextareaField
                  name="dietaryPreferences"
                  label="Dietary Preferences or Restrictions"
                  placeholder="Please let us know if you or anyone in your group has any dietary preferences or allergies"
                  rows={4}
                />

                {/* Additional Comments */}
                <TextareaField
                  name="additionalComments"
                  label="Any Additional Comments or Questions?"
                  placeholder="Feel free to share anything else you'd like us to know!"
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-6 text-lg font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                >
                  Submit Inquiry
                </Button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
}

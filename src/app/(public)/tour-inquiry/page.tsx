"use client";

import { Form } from "@/components/form";
import { TextField } from "@/components/form/text-field";
import { SelectField } from "@/components/form/select-field";
import { DatePickerField } from "@/components/form/date-picker-field";
import TextareaField from "@/components/form/textarea-field";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { cn } from "@/utils";

const communicationPlatforms = [
  { value: "email", label: "Email" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook Messenger" },
  { value: "viber", label: "Viber" },
  { value: "phone", label: "Phone Number" },
];

const adultOptions = Array.from({ length: 20 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1),
}));

const childrenOptions = Array.from({ length: 11 }, (_, i) => ({
  value: String(i),
  label: String(i),
}));

// Tour options - can be fetched from API later
const tourOptions = [
  { value: "nomadic-vagabond", label: "Nomadic Vagabond Venture" },
  { value: "northern-reindeer", label: "Northern Reindeer" },
  { value: "southern-dunes", label: "Southern Dunes" },
  { value: "eastern-echoes", label: "Eastern Echoes" },
  { value: "western-horizon", label: "Western Horizon Wings" },
  { value: "daylight-discoveries", label: "Daylight Discoveries" },
];

const packageOptions = [
  { value: "standard", label: "Standard Package" },
  { value: "premium", label: "Premium Package" },
  { value: "luxury", label: "Luxury Package" },
  { value: "custom", label: "Custom Package" },
];

export default function TourInquiryPage() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const handlePlatformToggle = (
    platform: string,
    setFieldValue: (name: string, value: any) => void,
  ) => {
    const newPlatforms = selectedPlatforms.includes(platform)
      ? selectedPlatforms.filter((p) => p !== platform)
      : [...selectedPlatforms, platform];
    setSelectedPlatforms(newPlatforms);
    setFieldValue("communicationPlatforms", newPlatforms);
  };

  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
    // TODO: Implement API call to submit inquiry
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Submit Inquiry
        </h1>

        <Form
          initialValues={{
            name: "",
            email: "",
            phoneCountryCode: "+976",
            phone: "",
            numberOfAdults: "",
            numberOfChildren: "0",
            interestedTour: "",
            startDate: "",
            endDate: "",
            tourPackage: "",
            communicationPlatforms: [],
            specificActivities: "",
            dietaryPreferences: "",
            additionalComments: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors, values, handleSubmit }) => {
            return (
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
                {/* Personal Information Section */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Personal Information
                  </h2>

                  <TextField
                    name="name"
                    label="Name"
                    placeholder="Please enter your full name"
                  />

                  <TextField
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="Your email addresss"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Phone number
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-shrink-0">
                        <select
                          value={values.phoneCountryCode || "+976"}
                          onChange={(e) =>
                            setFieldValue("phoneCountryCode", e.target.value)
                          }
                          className="h-12 px-4 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none pr-8"
                        >
                          <option value="+976">🇲🇳 +976</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+86">🇨🇳 +86</option>
                          <option value="+7">🇷🇺 +7</option>
                          <option value="+81">🇯🇵 +81</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                      <TextField
                        name="phone"
                        placeholder="Enter your phone number"
                        className="flex-1"
                        classNames={{
                          base: "flex-1",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Tour Details Section */}
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Tour Details
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SelectField
                      name="numberOfAdults"
                      label="Number of Adults"
                      placeholder="—"
                      options={[{ value: "", label: "—" }, ...adultOptions]}
                    />

                    <SelectField
                      name="numberOfChildren"
                      label="Number of Children"
                      placeholder="—"
                      options={[{ value: "", label: "—" }, ...childrenOptions]}
                    />
                  </div>

                  <SelectField
                    name="interestedTour"
                    label="Interested Tour"
                    placeholder="—"
                    options={[{ value: "", label: "—" }, ...tourOptions]}
                  />

                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-900">
                      Travel Dates
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <DatePickerField name="startDate" label="Start dates" />
                      <DatePickerField name="endDate" label="End Date" />
                    </div>
                  </div>

                  <div>
                    <SelectField
                      name="tourPackage"
                      label="Tour Package Selection:"
                      placeholder="—"
                      options={[{ value: "", label: "—" }, ...packageOptions]}
                    />
                    <p className="text-sm text-gray-600 mt-1">
                      Choose Your Ideal Experience
                    </p>
                  </div>
                </div>

                {/* Communication and Preferences Section */}
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Communication and Preferences
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Preferred Platform for Communication
                    </label>
                    <p className="text-sm text-gray-600 mb-3">
                      Please select how you'd like to communicate with us:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {communicationPlatforms.map((platform) => (
                        <button
                          key={platform.value}
                          type="button"
                          onClick={() =>
                            handlePlatformToggle(platform.value, setFieldValue)
                          }
                          className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors",
                            selectedPlatforms.includes(platform.value)
                              ? "bg-blue-500 text-white border-blue-500"
                              : "bg-white text-gray-700 border-gray-300 hover:border-blue-500",
                          )}
                        >
                          <span>{platform.label}</span>
                          <PlusIcon className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <TextareaField
                    name="specificActivities"
                    label="Any Specific Activities or Experiences You Want to Include ?"
                    placeholder="e.g.camel riding, horseback riding, reindeer herding, etc."
                    rows={4}
                  />

                  <TextareaField
                    name="dietaryPreferences"
                    label="Dietary Preferences or Restrictions"
                    placeholder="Please let us know if you or anyone in yout group has any dietary preferences or allergies"
                    rows={4}
                  />

                  <TextareaField
                    name="additionalComments"
                    label="Any Additional Comments or Questions ?"
                    placeholder="Feel free to share anything else you'd like us to know !"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => handleSubmit()}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </div>
            );
          }}
        </Form>
      </div>
    </div>
  );
}

// lib/validation.ts
import { z } from 'zod';

// Password strength validation
const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

// Investor Sign-Up Schemas
export const investorStep1Schema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  countryCode: z.string().default('+88'),
  phone: z.string().regex(/^[0-9]{10,11}$/, 'Phone number must be 10-11 digits'),
  password: passwordSchema,
  confirmPassword: z.string(),
  agreement: z.boolean().refine((val) => val === true, 'You must agree to the terms'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export const investorStep2Schema = z.object({
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Please select your gender',
  }),
  dob: z.string().refine((date) => {
    const birthDate = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1 >= 18;
    }
    return age >= 18;
  }, 'You must be at least 18 years old'),
  occupation: z.string().min(2, 'Occupation is required'),
  monthlyIncome: z.enum(['below_25000', '25000_50000', '50000_100000', '100000_250000', 'above_250000'], {
    required_error: 'Please select your income range',
  }),
  investmentExperience: z.enum(['none', 'beginner', 'intermediate', 'advanced'], {
    required_error: 'Please select your experience level',
  }),
  preferredInvestment: z.enum(['short_term', 'medium_term', 'long_term', 'flexible'], {
    required_error: 'Please select your preferred investment type',
  }),
});

export const investorStep3Schema = z.object({
  nidFront: z.string().min(1, 'NID front image is required'),
  nidBack: z.string().min(1, 'NID back image is required'),
  selfie: z.string().min(1, 'Selfie is required'),
  nomineeName: z.string().min(2, 'Nominee name is required'),
  nomineePhone: z.string().regex(/^[0-9]{10,11}$/, 'Nominee phone must be 10-11 digits'),
  nomineeRelationship: z.string().min(2, 'Nominee relationship is required'),
});

export const investorStep4Schema = z.object({
  bankName: z.string().optional(),
  bankBranch: z.string().optional(),
  accountNumber: z.string().optional(),
  accountHolderName: z.string().optional(),
  bankSkipped: z.boolean().default(false),
}).refine(
  (data) => {
    if (data.bankSkipped) return true;
    return data.bankName && data.bankBranch && data.accountNumber && data.accountHolderName;
  },
  {
    message: 'All bank fields are required if not skipping',
    path: ['bankName'],
  }
);

export const investorStep5Schema = z.object({
  shariahDeclaration: z.boolean().refine((val) => val === true, 'Shari\'ah declaration is required'),
  termsAccepted: z.boolean().refine((val) => val === true, 'Terms & Conditions must be accepted'),
  shariahCertUrl: z.string().optional(),
});

export const investorQuizSchema = z.object({
  answers: z.array(z.string()).length(5, 'All questions must be answered'),
});

// Business Sign-Up Schemas
export const businessStep1Schema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  businessEmail: z.string().email('Invalid email address'),
  countryCode: z.string().default('+88'),
  businessPhone: z.string().regex(/^[0-9]{10,11}$/, 'Phone number must be 10-11 digits'),
  password: passwordSchema,
  confirmPassword: z.string(),
  agreement: z.boolean().refine((val) => val === true, 'You must agree to the terms'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export const businessStep2Schema = z.object({
  industry: z.string().min(1, 'Industry is required'),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
  description: z.string().min(20, 'Description must be at least 20 characters').max(300, 'Description must not exceed 300 characters'),
  registrationPurpose: z.enum(['expansion', 'working_capital', 'equipment', 'inventory', 'other'], {
    required_error: 'Please select registration purpose',
  }),
});

export const businessOwnerSchema = z.object({
  fullName: z.string().min(2, 'Owner name is required'),
  role: z.string().min(2, 'Role is required'),
  ownershipPercent: z.number().min(0).max(100),
  phone: z.string().regex(/^[0-9]{10,11}$/, 'Phone must be 10-11 digits').optional(),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
});

export const businessStep3Schema = z.object({
  businessType: z.enum(['sole_proprietorship', 'partnership', 'private_limited', 'public_limited', 'llc', 'other'], {
    required_error: 'Please select business type',
  }),
  owners: z.array(businessOwnerSchema).min(1, 'At least one owner is required'),
}).refine(
  (data) => {
    const totalPercent = data.owners.reduce((sum, owner) => sum + owner.ownershipPercent, 0);
    return Math.abs(totalPercent - 100) < 0.01; // Allow small floating point differences
  },
  {
    message: 'Total ownership must equal 100%',
    path: ['owners'],
  }
);

export const businessStep4Schema = z.object({
  primaryOwnerNid: z.string().min(1, 'Primary owner NID number is required'),
  nidFront: z.string().min(1, 'NID front image is required'),
  nidBack: z.string().min(1, 'NID back image is required'),
  tradeLicenseNumber: z.string().min(1, 'Trade license number is required'),
  tradeLicenseUrl: z.string().min(1, 'Trade license document is required'),
  yearsInOperation: z.number().min(1, 'Must be at least 1 year').max(100),
});

export const businessStep5Schema = z.object({
  noHaramActivities: z.boolean().refine((val) => val === true, 'Declaration is required'),
  termsAccepted: z.boolean().refine((val) => val === true, 'Terms must be accepted'),
  shariahCompliant: z.boolean().refine((val) => val === true, 'Shari\'ah compliance declaration is required'),
  shariahCertUrl: z.string().optional(),
});

// Combined schemas for final validation
export const investorCompleteSchema = investorStep1Schema
  .merge(investorStep2Schema)
  .merge(investorStep3Schema)
  .merge(investorStep4Schema)
  .merge(investorStep5Schema)
  .merge(investorQuizSchema);

export const businessCompleteSchema = businessStep1Schema
  .merge(businessStep2Schema)
  .merge(businessStep3Schema)
  .merge(businessStep4Schema)
  .merge(businessStep5Schema);

// Type exports
export type InvestorStep1Data = z.infer<typeof investorStep1Schema>;
export type InvestorStep2Data = z.infer<typeof investorStep2Schema>;
export type InvestorStep3Data = z.infer<typeof investorStep3Schema>;
export type InvestorStep4Data = z.infer<typeof investorStep4Schema>;
export type InvestorStep5Data = z.infer<typeof investorStep5Schema>;
export type InvestorQuizData = z.infer<typeof investorQuizSchema>;
export type InvestorCompleteData = z.infer<typeof investorCompleteSchema>;

export type BusinessStep1Data = z.infer<typeof businessStep1Schema>;
export type BusinessStep2Data = z.infer<typeof businessStep2Schema>;
export type BusinessStep3Data = z.infer<typeof businessStep3Schema>;
export type BusinessStep4Data = z.infer<typeof businessStep4Schema>;
export type BusinessStep5Data = z.infer<typeof businessStep5Schema>;
export type BusinessCompleteData = z.infer<typeof businessCompleteSchema>;
export type BusinessOwner = z.infer<typeof businessOwnerSchema>;











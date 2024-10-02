export interface IUserProps {
    _id: string;
    name: string;
    shopName?: string; // Optional field
    mobile?: string; // Optional
    mobile4OTP?: string; // Optional
    pinCode?: string; // Optional
    otp?: string; // Optional
    isVerified: boolean;
    isBlocked?: boolean;
    policyVerified: boolean;
    kycApproved?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
  

export interface IKycProps {
    _id: string;
    businessName: string;
    emailId: string;
    buildingName: string;
    street: string;
    post: string;
    pinCode: string;
    state: string;
    country: string;
    proof?: string; // Optional
    proofType: 
      | 'Udyam Aadhaar'
      | 'GST Certificate'
      | 'Current Account Cheque'
      | 'Shop & Establishment License'
      | 'Trade Certificate/License'
      | 'Other Shop Documents';
    status: 'pending' | 'approved' | 'rejected';
    rejectionReason?: string; // Optional
    isApproved: boolean;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}
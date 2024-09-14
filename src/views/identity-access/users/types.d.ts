interface Address {
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface UserProfile {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  status: 'ACTIVE' | 'INACTIVE' // assuming "ACTIVE" and other possible statuses
  dateOfBirth: string // or Date if you want to parse it
  gender: 'male' | 'female' | 'other' // assuming possible values for gender
  address: Address
  profilePictureUrl: string
  createdAt: string // or Date
  updatedAt: string // or Date
}

interface UserFilter {
  updateTimeRange?: {
    startDate: Date | null
    endDate: Date | null
  }
  creationTimeRange?: {
    startDate: Date | null
    endDate: Date | null
  }
  dateOfBirthRange?: {
    startDate: Date | null
    endDate: Date | null
  }
  profileCompleteness?: boolean // true for complete profiles, false for incomplete profiles
}

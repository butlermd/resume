export type EncodableString = {
  encodedValue?: string
  clearValue?: string
}

export type EmailParts = {
  username: EncodableString
  domain: EncodableString
}

export type LinkParts = {
  url: string
  display: string
  printDisplay: string
}

export type ContactDetails = {
  address: EncodableString
  email: EmailParts
  phone: EncodableString
  linkedIn: LinkParts
}

export type Position = {
  title: string
  startDate: string
  endDate?: string
  duties: string[]
}

export type Experience = {
  name: string
  location: string
  summary?: string
  positions: Position[]
}

export type Skill = {
  name: string
  fluency: number
}

export type SkillCategory = {
  name: string
  summary?: string
  description?: string
  specifics: Skill[]
}

export type ResumeValues = {
  contact: ContactDetails
  experience: Experience[]
  skills: SkillCategory[]
}

export type AppValues = {
  name: string
  tagline: string
  resume: ResumeValues
}

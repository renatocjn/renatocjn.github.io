export interface ContactInfo {
  email: string
  github: string
  address: string
  orcid: string
  phone_number: string
}

type TimelineItemType = "education"|"work_experience"|"publication"
export interface TimelineItem {
  type: TimelineItemType
}

type DateEnd = string | number //number for year
type DateStart = DateEnd | "Present" 
export interface EducationItem extends TimelineItem {
  title: string
  study_area: string
  school: string
  location: string
  dateStart: DateStart
  dateEnd: DateEnd
  tldr: string
  detailed: string | undefined
}

export interface WorkItem extends TimelineItem {
  position: string
  company: string
  dateStart: DateStart
  dateEnd: DateEnd
  tldr: string
  activities: string[]
}

type SkillLevel = "Beginner"|"Intermediary"|"Advanced"
export interface Skill {
  name: string
  level: SkillLevel
  detailed: string
}

export interface PubLink {
  type: string
  link: string
}
export interface PublishedWork extends TimelineItem {
  main: boolean
  authors: string[]
  title: string
  venue: string
  location: string
  year: number
  links: PubLink[]
  detailed: string
}

type TimeLineItemClasses = EducationItem|WorkItem|PublishedWork
export interface CvInformation {
  full_name: string
  current_position: string
  two_liner: string
  bio: string
  contact_info: ContactInfo
  timeline: TimeLineItemClasses[]
  skills: Skill[]
}
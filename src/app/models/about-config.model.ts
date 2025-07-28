export interface AboutMeModel {
  title: string;
  image: ImageModel;
  content: string;
  quickFacts: QuickFact[];
}

export interface ImageModel {
  url: string;
  alt: string;
}

export interface QuickFact {
  label: string;
  content: string;
}
export interface HowIGotHereModel {
  title: string;
  list: string[];
}

export interface ProfesionalJourneyModel {
  title: string;
  list: string[];
}

export interface OutsideOfWorkModel {
  title: string;
  content: string;
}

export interface AboutContentModel {
  aboutMe: AboutMeModel;
  howIGotHere: HowIGotHereModel;
  profesionalJourney: ProfesionalJourneyModel;
  outsideOfWork: OutsideOfWorkModel;
}

export interface AboutTickerConfigModel {
  title: string;
  items: string[];
}

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'SUPER_ADMIN' | 'BRANCH_PASTOR' | 'TREASURER' | 'SECRETARY';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  branch: 'Headquarters' | 'Ayegbami Branch' | 'Eposo Branch' | 'All Branches';
  avatar?: string;
}

export interface WeeklyReport {
  id: string;
  date: string;
  serviceType: 'Sunday Worship' | 'Tuesday Bible Study' | 'Thursday Solution Hour' | 'Power Night Vigil' | 'Special Program';
  branch: 'Headquarters' | 'Ayegbami Branch' | 'Eposo Branch';
  menAttendance: number;
  womenAttendance: number;
  childrenAttendance: number;
  totalAttendance: number;
  newConverts: number;
  decisionsForChrist: number;
  holySpiritBaptism: number;
  healings: number;
  generalTithe: number;
  sundayOffering: number;
  thanksgivingOffering: number;
  buildingSeed: number;
  evangelismSeed: number;
  totalCollection: number;
  sermonTitle: string;
  preacher: string;
  scriptureReference: string;
  submittedBy: string;
  createdAt: string;
}

export interface MonthlySpiritualReport {
  newConverts: number;
  decisionsForChrist: number;
  waterBaptism: number;
  holySpiritBaptism: number;
  healings: number;
  houseFellowshipCentres: number;
  // Crusader programme age breakdown
  childrenCadets: number;
  teensJunior: number;
  teensSenior: number;
  youthChallengers: number;
  adultsCFM: number;
  seniorCitizens: number;
  // Membership summary
  previousMonthMembers: number;
  newMembersThisMonth: number;
  withdrawalsTransfers: number;
  withdrawalsDeath: number;
  withdrawalsDismissed: number;
  totalMembersAfterWithdrawals: number;
  // Credentialed workers
  ordainedMinisters: number;
  licensedMinisters: number;
  exhorters: number;
  eldersDeacons: number;
  eldersDeaconesses: number;
  // Average attendance
  avgPreSundaySchoolPrayer: number;
  avgSundaySchool: number;
  avgSundayWorship: number;
  avgHouseFellowship: number;
  avgBibleStudy: number;
  avgPrayerMeeting: number;
}

export interface MonthlyFinancialReport {
  // Receipts
  generalTithe: number;
  ministersTithe: number;
  worshipOfferings: number;
  missionaryOfferings: number;
  midweekOfferings: number;
  sundaySchoolOfferings: number;
  thanksgivingOfferings: number;
  loveWelfareOfferings: number;
  buildingPledges: number;
  churchPioneering: number;
  donations: number;
  seedFaith: number;
  staffLoanRepayment: number;
  otherReceipts: number;
  totalReceipts: number;

  // Payments
  ministersBasicSalary: number;
  ministersAllowances: number;
  workersBasicSalary: number;
  workersAllowances: number;
  officeRefreshments: number;
  churchPioneeringExpenses: number;
  donationsLoveOfferings: number;
  sundaySchoolExpenses: number;
  crusadeRevivalExpenses: number;
  buildingRepairs: number;
  pastorsTraining: number;
  stationeryPhotocopies: number;
  electricity: number;
  transportation: number;
  welfare: number;
  bankCharges: number;
  landAcquisition: number;
  equipmentPurchase: number;
  totalPayments: number;

  // Calculations
  surplusDeficit: number;
  cashInHandBank: number;
}

export interface FullMonthlyReport {
  id: string;
  month: string; // e.g. "April"
  year: number; // e.g. 2026
  branch: 'Headquarters' | 'Ayegbami Branch' | 'Eposo Branch';
  pastorName: string;
  treasurerName: string;
  secretaryName: string;
  churchAddress: string;
  spiritual: MonthlySpiritualReport;
  financial: MonthlyFinancialReport;
  status: 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'LOCKED';
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, role?: UserRole) => boolean;
  logout: () => void;
  weeklyReports: WeeklyReport[];
  monthlyReports: FullMonthlyReport[];
  addWeeklyReport: (report: Omit<WeeklyReport, 'id' | 'createdAt'>) => void;
  addMonthlyReport: (report: Omit<FullMonthlyReport, 'id' | 'createdAt'>) => void;
  updateMonthlyReportStatus: (id: string, status: FullMonthlyReport['status']) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const PRESET_USERS: User[] = [
  {
    id: '1',
    name: 'Pst. Gabriel Emmanuel',
    email: 'admin@praise.org',
    role: 'SUPER_ADMIN',
    branch: 'All Branches',
  },
  {
    id: '2',
    name: 'Pst (Mrs) Gabriel Emmanuel',
    email: 'ayegbami@praise.org',
    role: 'BRANCH_PASTOR',
    branch: 'Ayegbami Branch',
  },
  {
    id: '3',
    name: 'Lady Evang. Oyedele',
    email: 'eposo@praise.org',
    role: 'BRANCH_PASTOR',
    branch: 'Eposo Branch',
  },
  {
    id: '4',
    name: 'Bro Kehinde Asyba',
    email: 'treasurer@praise.org',
    role: 'TREASURER',
    branch: 'Headquarters',
  },
];

// Initial mock data based on uploaded physical sheets
const INITIAL_WEEKLY_REPORTS: WeeklyReport[] = [
  {
    id: 'w-1',
    date: '2026-08-16',
    serviceType: 'Sunday Worship',
    branch: 'Headquarters',
    menAttendance: 120,
    womenAttendance: 165,
    childrenAttendance: 85,
    totalAttendance: 370,
    newConverts: 12,
    decisionsForChrist: 10,
    holySpiritBaptism: 5,
    healings: 3,
    generalTithe: 145000,
    sundayOffering: 65000,
    thanksgivingOffering: 40000,
    buildingSeed: 50000,
    evangelismSeed: 25000,
    totalCollection: 325000,
    sermonTitle: 'Walking in Divine Life & Unstoppable Victory',
    preacher: 'Pst. Gabriel Emmanuel',
    scriptureReference: '2 Corinthians 5:17',
    submittedBy: 'Bro Kehinde Asyba',
    createdAt: '2026-08-16T12:30:00Z',
  },
  {
    id: 'w-2',
    date: '2026-08-16',
    serviceType: 'Sunday Worship',
    branch: 'Ayegbami Branch',
    menAttendance: 45,
    womenAttendance: 68,
    childrenAttendance: 40,
    totalAttendance: 153,
    newConverts: 5,
    decisionsForChrist: 5,
    holySpiritBaptism: 2,
    healings: 1,
    generalTithe: 48500,
    sundayOffering: 24500,
    thanksgivingOffering: 15400,
    buildingSeed: 12000,
    evangelismSeed: 8000,
    totalCollection: 108400,
    sermonTitle: 'Faith That Overcomes The World',
    preacher: 'Pst (Mrs) Gabriel Emmanuel',
    scriptureReference: '1 John 5:4',
    submittedBy: 'Pst (Mrs) Gabriel Emmanuel',
    createdAt: '2026-08-16T12:00:00Z',
  },
  {
    id: 'w-3',
    date: '2026-08-16',
    serviceType: 'Sunday Worship',
    branch: 'Eposo Branch',
    menAttendance: 38,
    womenAttendance: 55,
    childrenAttendance: 35,
    totalAttendance: 128,
    newConverts: 4,
    decisionsForChrist: 3,
    holySpiritBaptism: 2,
    healings: 2,
    generalTithe: 35000,
    sundayOffering: 18500,
    thanksgivingOffering: 12000,
    buildingSeed: 10000,
    evangelismSeed: 6000,
    totalCollection: 81500,
    sermonTitle: 'The Anointing for Breakthrough',
    preacher: 'Lady Evang. Oyedele',
    scriptureReference: 'Isaiah 10:27',
    submittedBy: 'Lady Evang. Oyedele',
    createdAt: '2026-08-16T12:15:00Z',
  },
];

const INITIAL_MONTHLY_REPORTS: FullMonthlyReport[] = [
  {
    id: 'm-2018-04',
    month: 'April',
    year: 2018,
    branch: 'Ayegbami Branch',
    pastorName: 'Onu Genesis',
    treasurerName: 'Bro Kehinde Asyba',
    secretaryName: 'Mrs Genesis',
    churchAddress: 'No 6, Ikara Road - Ode Remo',
    status: 'APPROVED',
    createdAt: '2018-04-30T16:00:00Z',
    spiritual: {
      newConverts: 5,
      decisionsForChrist: 5,
      waterBaptism: 2,
      holySpiritBaptism: 1,
      healings: 1,
      houseFellowshipCentres: 1,
      childrenCadets: 15,
      teensJunior: 12,
      teensSenior: 10,
      youthChallengers: 25,
      adultsCFM: 40,
      seniorCitizens: 8,
      previousMonthMembers: 110,
      newMembersThisMonth: 5,
      withdrawalsTransfers: 0,
      withdrawalsDeath: 0,
      withdrawalsDismissed: 0,
      totalMembersAfterWithdrawals: 115,
      ordainedMinisters: 1,
      licensedMinisters: 1,
      exhorters: 2,
      eldersDeacons: 3,
      eldersDeaconesses: 4,
      avgPreSundaySchoolPrayer: 36,
      avgSundaySchool: 123,
      avgSundayWorship: 180,
      avgHouseFellowship: 50,
      avgBibleStudy: 75,
      avgPrayerMeeting: 60,
    },
    financial: {
      generalTithe: 5650,
      ministersTithe: 2300,
      worshipOfferings: 2465,
      missionaryOfferings: 0,
      midweekOfferings: 1220,
      sundaySchoolOfferings: 0,
      thanksgivingOfferings: 1540,
      loveWelfareOfferings: 0,
      buildingPledges: 0,
      churchPioneering: 0,
      donations: 0,
      seedFaith: 0,
      staffLoanRepayment: 0,
      otherReceipts: 0,
      totalReceipts: 9885,

      ministersBasicSalary: 5000,
      ministersAllowances: 0,
      workersBasicSalary: 5000,
      workersAllowances: 0,
      officeRefreshments: 1000,
      churchPioneeringExpenses: 0,
      donationsLoveOfferings: 2270,
      sundaySchoolExpenses: 2270,
      crusadeRevivalExpenses: 1000,
      buildingRepairs: 0,
      pastorsTraining: 0,
      stationeryPhotocopies: 1000,
      electricity: 1500,
      transportation: 500,
      welfare: 500,
      bankCharges: 0,
      landAcquisition: 0,
      equipmentPurchase: 0,
      totalPayments: 62700,

      surplusDeficit: 11925,
      cashInHandBank: 2040,
    },
  },
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [weeklyReports, setWeeklyReports] = useState<WeeklyReport[]>(INITIAL_WEEKLY_REPORTS);
  const [monthlyReports, setMonthlyReports] = useState<FullMonthlyReport[]>(INITIAL_MONTHLY_REPORTS);

  useEffect(() => {
    // Load persisted user & reports from localStorage
    const savedUser = localStorage.getItem('praise_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error(e);
      }
    }

    const savedWeekly = localStorage.getItem('praise_weekly_reports');
    if (savedWeekly) {
      try {
        setWeeklyReports(JSON.parse(savedWeekly));
      } catch (e) {
        console.error(e);
      }
    }

    const savedMonthly = localStorage.getItem('praise_monthly_reports');
    if (savedMonthly) {
      try {
        setMonthlyReports(JSON.parse(savedMonthly));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const login = (email: string) => {
    const foundUser = PRESET_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('praise_user', JSON.stringify(foundUser));
      return true;
    }
    // Default to Super Admin if unknown email during demo
    const defaultUser = PRESET_USERS[0];
    setUser(defaultUser);
    localStorage.setItem('praise_user', JSON.stringify(defaultUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('praise_user');
  };

  const addWeeklyReport = (report: Omit<WeeklyReport, 'id' | 'createdAt'>) => {
    const newReport: WeeklyReport = {
      ...report,
      id: `w-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    const updated = [newReport, ...weeklyReports];
    setWeeklyReports(updated);
    localStorage.setItem('praise_weekly_reports', JSON.stringify(updated));
  };

  const addMonthlyReport = (report: Omit<FullMonthlyReport, 'id' | 'createdAt'>) => {
    const newReport: FullMonthlyReport = {
      ...report,
      id: `m-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    const updated = [newReport, ...monthlyReports];
    setMonthlyReports(updated);
    localStorage.setItem('praise_monthly_reports', JSON.stringify(updated));
  };

  const updateMonthlyReportStatus = (id: string, status: FullMonthlyReport['status']) => {
    const updated = monthlyReports.map((r) => (r.id === id ? { ...r, status } : r));
    setMonthlyReports(updated);
    localStorage.setItem('praise_monthly_reports', JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        weeklyReports,
        monthlyReports,
        addWeeklyReport,
        addMonthlyReport,
        updateMonthlyReportStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

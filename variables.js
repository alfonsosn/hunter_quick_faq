var categories = ["Registration", "Financial Aid", "Billing"]; 

var financial  = ["Fafsa", "Work Study", "TAP", "Loans"] 

var billing = [
	{
		question: "Access my bill?",
		answer: "Students may access their bill online in CUNYfirst. For step-by-step instructions click here. Please review the Billing page under Payments to obtain more information about how tuition and mandatory fees are calculated."
	},
	{
		question: "Pay my bill?",
		answer: "Students can pay their bill 1) at the Cashier Windows in the Bursar's Office: 2) through the mail 3) through CUNYfirst using an EFT 4) Payment Plan. 5) Effective April 28, 2016, all Credit and Debit Card transactions are processed via the University's Payment Plan. Click here to learn more. 6) Students may pay their bill online in CUNYfirst. For step-by-step instructions click here.  "
	},
	{
		question: "Pay my commitment deposit?",
		answer: "Click here for more information on how to pay your commitment deposit."
	},
	{
		question: "Set up a payment plan?",
		answer: "How to enroll in a Nelnet Payment Plan (video tutorial)"
	},
	{
		question: "Remove a stop on my account?",
		answer: "Click here to learn more on how to remove a stop from your account."
	},
	{
		question: "Drop classes?",
		answer: "Students are able to drop their class(es) on CunyFirst any time before the end of the third week of the term."
	},
	{
		question: "Grant access to my records?",
		answer: "Students who wish to allow another person access to their academic records can grant this access by completing the FERPA form and submit to THE ONE STOP OFFICE, 217 North."
	},
	{
		question: "Change my address?",
		answer: "Students who need to change their address on file must do so at ONE STOP OFFICE, in Room 217 North, by completing the Change of Address form."
	},
	{
		question: "Change my residency?",
		answer: "Students who feel they have been incorrectly classified as a non-resident should complete a  NY State Residency application and proceed as follows: 1) New students should visit the Office of Admissions in room 203 North, call (212) 772-4490 or email admissions@hunter.cuny.edu. 2) Continuing students should visit the ONE STOP OFFICE in Room 217 North, call (212) 772-4474 or email regweb@hunter.cuny.edu. 3) School of Social Work students should visit their Office of Admissions, Room 704, or call (212) 452-7005"
	},
	{
		question: "Obtain a dorm room?",
		answer: "Students wishing to obtain a dorm room must visit www.hunter.cuny.edu/onestop/finances/billing/residence-halls"
	}
]

var fafsa =	[
	{
		question: "Why is my financial aid award different than in the past?",
		answer: "The amount of TAP, PELL and other government grant aid that you are eligible for varies depending on your family's income and size of household. Each year, students must reapply for financial aid with information for the current year. If your family's financial circumstances change, the aid that you are eligible for will change as well."
	},
	{
		question: "Where can I go for more information?",
		answer: "There are several available resources to help you. For information on available scholarships, visit www.cuny.edu/scholarships, or the Financial Aid office at the CUNY college you plan to attend. To find out more information on federal student aid and for help in completing the FAFSA, visit www.studentaid.ed.gov. For general information about federal student financial assistance programs or help in completing the FAFSA, or to obtain federal student aid publications, call 1-800-433-3243. Additional Resources Include: www.studentloans.gov - for information on student loans / www.hesc.ny.gov - General information on your TAP grant"
	 },
	{
		question: "When is student aid considered income?",
		answer: "Generally, grants and scholarships that do not exceed tuition, fees, books, and required supplies are not considered income. Student aid is considered income when it's taxable student grant and scholarship aid such as fellowships and assistantships which are reported to the IRS in your parents or your adjusted gross income."
	},
	{
		question: "If I am in the National Guard or am an active duty military member, am I considered a veteran for purposes of filling out the FAFSA?",
		answer: "You are considered a veteran for the purpose of filling out the FAFSA if you have engaged in active duty in the U.S. Armed Forces (Army, Navy, Air Force, Marines or Coast Guard) or are a National Guard or Reserve enlistee who was called to active duty for other than state or training purposes, or were a cadet or midshipman at one of the service academies and were released under a condition other than dishonorable. If you are not on active duty in the Army, Navy, Air Force, Marines or Coast Guard, but will be a veteran by June 30, 2010, you are considered a veteran for FAFSA purposes."
	},
	{
		question: "What if I'm a dependent student but my parents are divorced or separated?",
		answer: "You report the parent with whom you lived the most during the 12 months preceding the date you completed the FAFSA. It does not make a difference which parent claims you as a dependent for tax purposes. If you did not live with either parent or lived equally with each parent, the parental information must be provided for the parent from whom you received the most financial support during the preceding 12 months or the parent from whom you received the most support the last time support was given. If the parent you receive financial support from was a single parent who is now married, or the parent was divorced or widowed but has remarried, your stepparents financial information is required on the FAFSA. This does not mean your stepparent is obligated to give financial assistance to you, but his or her income and assets represent significant information about the family's resources."
	},
	{
		question: "I am entering financial information for my mother and stepfather on the FAFSA. Should I give my father's Social Security Number (SSN) and last name, or my stepfather's?",
		answer: "You should provide the SSN and last name of the same person or people for whom you are reporting financial information. In this case, provide the SSNs and names of your mother and stepfather."
	 },
	{
		question: "What should you do if the parent with whom you live is remarried and the stepparent refuses to supply information?",
		answer: "If you are a dependent student and your parent is remarried, the stepparent's information must be included or you will not be considered for federal student financial aid. If you believe that your situation is unique or unusual other than the stepparent's simple refusal to provide the requested information, you should discuss the matter further with a member of the Office of Financial Aid staff."
	},
	{
		question: "How does a family decide who should be counted in the household size?",
		answer: "Anyone in the immediate family who receives more than 50% support from a dependent student's parents or an independent student and spouse may be counted in the household size. For example, a sibling who is over 24 but still receives the majority of his/her support from the parents can be included. Siblings who are dependent (as defined by the FAFSA) as of the date you apply for aid are also included, regardless of whether they receive more than 50% of their support from the parents. Any other person who resides in the household and receives more than 50% support from the parents may also be counted, as long as they will continue to reside with your parents and the support is expected to continue through June 30 2016. An unborn child who will be born during the award year may also be counted in the household size. Household size and tax exemptions are not necessarily the same. Exemptions look at the previous year or tax year and household size refers to the school year for which the student is applying for aid."
	},
	{
		question: "My parents separated four months ago. I live with my mother. My parents filed a joint tax return and claimed me as an exemption. Do I report both of their incomes, or just my mother's?",
		answer: "Report only your mother's income and asset information because you lived with her the most during the past 12 months. Use a W-2 Form or other record(s) to determine her share of the income reported and taxes paid on the tax return."
	},
	{
		question: "If I (the student) am separated but filed a joint tax return, how is the information reported?",
		answer: "You should give only your portion of the exemptions, income, and taxes paid."
	},
	{
		question: "Who qualifies to be counted in the number in college?",
		answer: "Any person (other than your parents) who is counted in the household and will be attending any term of the academic year at least half time. The person must be working toward a degree or certificate leading to a recognized education credential at a postsecondary school eligible to participate in the federal student aid programs. You (the student) need not be enrolled half time to be counted in the number in college."
	},
	{
		question: "When Does My School Have to Receive the Results From My Application?",
		answer: "Your school must have your information by your last day of enrollment. If your school has not received your application information electronically, you must submit your paper SAR to the school by the deadline. Either the electronic record (ISIR) or the paper SAR that has been processed by the Department must have an official EFC. Once the school receives your information, it will use your EFC to determine the amount of your federal grant, loan, or workstudy award, if you are eligible. The FAA will send you a letter explaining the aid the school is offering."
	},
	{
		question: "What if I don't get a SAR Acknowledgement or SAR, or I need another copy of that form?",
		answer: "If you do not receive your SAR Acknowledgement within two weeks or SAR within four weeks after submitting your application, call the Federal Student Aid Information Center at 1-800-4-FED-AID (1-800-433-3243). You can use the automated system to find out whether your application has been processed or to request duplicate copies of your report. You will need to provide your Social Security Number and the first two letters of your last name. You can also check the status of your FAFSA and print a copy of your SAR at www.fafsa.gov. If you apply on FAFSA on the Web, you will get a confirmation notice after you click on Submit."
	},
	{
		question: "I sent in my FAFSA over a week ago but haven't got an email. What should I do?",
		answer: "Your FAFSA will be processed in two to four days. If you do get an email within a week you can check the status by going to www.fafsa.gov. You can also check by contacting the Federal student aid Information center at 1-800-4-FED-AID. "
	},
	{
		question: "My parents don't support me and won't contribute to my education, so why am I still considered a 'dependent' student?",
		answer: "It's a federal regulation. There are basic requirements a student must meet to be considered an independent student. If you do not meet these requirements but you still believe you are truly independent of your parents, you may appeal for a 'dependency override' in the financial aid office at your school. In unusual cases, the financial aid administrator can change your dependency based on adequate documentation of special circumstances you may have."
	},
	{
		question: "What should I do if my family has special circumstances that aren't mentioned in the application?",
		answer: "Whenever you have problems or questions about your financial aid, you can come and speak to a counselor in the Office of Financial Aid, located in HN 241. Any change in your family's circumstances (i.e. loss of employment, loss of benefits, death or divorce) should be reported so that we can help you adjust the data elements used to calculate your EFC. The adjustment might increase your eligibility for student aid to help you through your Hunter education."
	}
]

var tap = [
	{
		question: "For how many semesters can I receive TAP?",
		answer: "For an associate degree you may receive TAP for up to 6 semesters. You will be limited to 6 semesters of TAP even if you change majors or transfer to another community college. When you enroll in a 4 year college program at a senior college, you will become eligible for an additional 2 full-time semesters of TAP bringing your undergraduate total to 8 semesters. If you are enrolled in SEEK, you may receive up to 10 semesters (or the equivalent) of TAP as an undergraduate."
	},
	{
		question: "How do I make sure my classes are eligible for Tuition Assistance Program (TAP) funding. How much TAP can I receive?",
		answer: "Not all students are eligible for TAP. To be eligible you must be a legal NY state resident and be enrolled in at least 12 credits, all of which must count toward the completion of your Hunter degree. The first place to go to determine whether you can use TAP funding toward your current course of study is your FACTS (Financial Aid Eligibility & Certification Tracking System) account. When you log in, click on 'Current Eligibility' on the menu bar and select 'Details'. This will give you an explanation of how much TAP money you are eligible for, and if you are not, why not."
	},
	{
		question: "Can I get TAP for repeating a course?",
		answer: "If you repeat a course that you previously passed, you may not count the repeated course towards full-time enrollment for TAP purposes. This means that in order to receive TAP in a semester where you may be repeating a course you passed previously that you have, in addition to the repeated course, at least 12 credits or equated credits of non-repeated courses. If you repeat a course that you previously failed, you may include that course towards full-time enrollment for TAP purposes."
	},
	{
		question: "Can I get TAP for remedial courses?",
		answer: "Remedial courses may be counted towards either full-time or part time enrollment for TAP purposes. However, to qualify for TAP, you must always be registered for a certain number of degree credit courses."
	},
	{
		question: "Where I can I go for more information about my TAP award?",
		answer: "The HESC Customer Communication Center can be reached by telephone toll-free at 1-888-NYS-HESC (1-888-697-4372). You could also reach them on the web by going to www.hesc.org."
	},
	{
		question: "If I am planning on attending college out-of-state should I Bill out the TAP application?",
		answer: "Yes. You never know if your plans will change and having the TAP application on file will speed up the process if you decide to attend college in New York State."
	},
	{
		question: "I missed the link to the TAP on the Web site when I completed my FAFSA online. Can I get to it any other way?",
		answer: "Yes. You must wait until you receive either an email or a postcard with the web address of TAP on the Web. You can then set up a PIN number which will allow you to access the TAP on the Web site and you can complete your TAP application and have it submitted to HESC."
	}
]

var work = [
	{
		question: "Are work-study earnings taxable?",
		answer: "The money you earn from Federal Work-Study is generally subject to federal and state income tax, but exempt from FICA taxes (provided you are enrolled full time and work less than halftime). Federal Work-Study earnings during the calendar year should be included in the totals for AGI on the FAFSA. Work-study earnings should only be included when they represent financial aid to the student, since the answer to this question is used as an exclusion from taxed income. The student should also be careful to report amounts based on the calendar year, not the school year."
	},
	{
		question: "How will I be notified if I am awarded?",
		answer: "An award email will be sent to your Hunter email address. You can also check your award on your CUNYfirst Student Center page by scrolling down to ‘Finances’ and choosing the ‘View Financial Aid’ link."
	},
	{
		question: "Do I have to accept the award on CUNYfirst?",
		answer: "Yes, you must accept the award by going to your CUNYfirst Student Center page scrolling down to ‘Finances’ and choosing the ‘Accept/Decline Awards’ link."
	},
	{
		question: "If I was not awarded a work-study grant, can I still be considered for an award?",
		answer: "Yes, send an email from your Hunter email address to fwsjobs@hunter.cuny.edu indicating your interest in the work- study program. Awards are made on a first come first served basis, the remaining need in your CUNY financial aid budget and the availability of funding. Please include your EMPLID in the email and allow 3-4 weeks for a response."
	},
	{
		question: "How do I notify CUNY that I would like to begin working during the summer?",
		answer: "Complete the CUNY Supplement Form listed on your CUNYfirst ‘To Do List."
	},
	{
		question: "Can I begin working during the summer if I am not enrolled?",
		answer: "Yes, but only if you were enrolled the prior spring semester and are enrolled for the upcoming fall semester before you begin working in the summer."
	},
	{
		question: "How many hours can I work per week during the summer if I am not enrolled?",
		answer: "You can work twenty-five hours per week if you are not enrolled, and twenty hours per week if you are enrolled."
	},
	{
		question: "When can I apply for a job?",
		answer: "Emails containing information about applying for a job are sent to continuing students only for summer placement in June. Fall placement emails are sent to all students who have accepted the work-study award on CUNYfirst and are registered for at least six credits in August. Emails are only sent to Hunter College email addresses."
	},
	{
		question: "Are there forms that I must complete before I start working?",
		answer: "Yes, when students come in for placement they are given a hiring packet which includes forms that the supervisor must complete."
	},
	{
		question: "Can I begin working if I have not submitted a hiring packet?",
		answer: "No, you must submit the completed hiring packet to the Office of Financial Aid Room 241 North before you can begin working."
	},
	{
		question: "What is the last day I can work?",
		answer: "The last day of finals or if all the monies have been earned; whichever comes first."
	},
	{
		question: "Am I paid an hourly wage or a salary?",
		answer: "You are paid by the hour, your rate of pay is determined by the job location and the nature of the work involved. Currently the undergraduate pay rates for on-campus positions range from $9.00 – $11.00 per hour. The current pay rate for graduate students is $12.00 per hour. The current rate of pay for jobs off-campus is $9.00 per hour."
	},
	{
		question: "How often will I be paid?",
		answer: "Every two weeks, time sheets are completed on line. All time sheets must be approved by your supervisor. After your hiring package is submitted, you may have to wait up to 4 weeks for your first payment. Subsequently, you will receive a payment every two weeks."
	},
	{
		question: "If I am unable to earn my entire award, will I be able to receive the rest of the money?",
		answer: "No. You can be paid only for the hours you have worked. If you cannot earn your entire FWS award before the end of the academic year, the unearned portion of your award is returned to the program."
	},
	{
		question: "How many credits do I have to take for FWS eligibility?",
		answer: "You must register for and maintain an enrollment status of half-time (6 credits or equated credits) or greater to be eligible for FWS. If, for any reason, your course load falls below half-time, you can no longer participate in the program and must stop working."
	},
	{
		question: "Do I have to stop working if I withdraw from school?",
		answer: "Yes. If you withdraw from school for any reason, you lose your eligibility for FWS and must stop working."
	},
	{
		question: "Are FWS earnings taxable?",
		answer: "Yes. FWS earnings are considered taxable income by both federal and state governments. However, FWS earnings are not included in the calculation of your eligibility for financial aid."
	},
	{
		question: "Why do I have to fill out an I-9 Form?",
		answer: "According to federal law, the identity and work eligibility of all FWS students must be verified before beginning a FWS assignment. The I-9 form is one of the documents in your FWS hiring packet. You will have to complete an I-9 form and present certain documents to your FWS supervisor. You may not participate in the on-campus/off-campus FWS program until you have submitted a completed I-9 form to the Office of Financial Aid."
	},
	{
		question: "What are the benefits of the FWS program?",
		answer: "If you have never had a job, the FWS program can give you your first exposure to the world of work. FWS employers are often willing to give you on-the-job training. You can find positions relating directly to your program of study or career choice, thereby gaining valuable job experience. You may learn about giving something back to the community through a community service related FWS position. When seeking regular employment after graduation, you may use your FWS job as an employment reference. Finally, you could be taken on as a regular employee by the employer you worked for as a FWS student."
	}
]

var loans = [
	{
		question: "I submitted my loan application online, how can I find out the status?",
		answer: "Currently, Hunter College can only accept paper-based loan applications. We hope to have the capability to accept online applications in the near future, but for now, applications that have been completed online cannot be processed by our office of Financial Aid. If you've done one online, you'll need to repeat the process with a paper application."
	},
	{
		question: "I submitted a loan application a week ago, why doesn't it show up on CUNYFirst?",
		answer: "It takes at least four weeks to process a loan application. If you check CUNYFirst before four weeks have passed, you won't see evidence of your application. Please allow enough time to pass before checking the status of your application."
	},
	{
		question: "Who is my lender?",
		answer: "Ultimately, your federal student loan lender is the federal government, but loan servicers are the companies that handle the billing and other services on your loan. Once your loan application is approved, the loan servicer that will handle your loan will contact you directly, usually by mail and/or email. While that money is transferred directly to Hunter College, it is important that you stay on top of communication with your servicer and know everything about the terms of your loans.You can find more information about your loan servicer at www.nslds.ed.gov."
	},
	{
		question: "Can I cancel my student loan if I change my mind, even if I've signed the promissory note agreeing to the loan's terms?",
		answer: "Yes. Your school must notify you in writing whenever it credits your account with your loan funds. You may cancel all or a portion of your loan if you inform your school within 14 days after the date your school sent you this notice, or by the first day of the payment period, whichever is later. (Your school can tell you the first day of your payment period.)"
	},
	{
		question: "How do my parents apply for a PLUS Loan?",
		answer: "Your parents complete a Direct PLUS Loan application and promissory note that you'll get from your school's financial aid office. They will have to pass a credit check. If they don't pass they might still be able to receive a loan if they can demonstrate that extenuating circumstances exits, or if someone thy know, who can pass agrees to endorse the loan and promises to repay it if your parents don't."
	},
	{
		question: "Are my parents responsible for my educational loans?",
		answer: "No. Parents are, however, responsible for the Federal PLUS loans. Parents will only be responsible for your educational loans if you are under 18 and they co-sign your loan. In general you and you alone are responsible for repaying your educational loans. On the other hand, if your parents (or grandparents) want to help pay off your loan, you can have your billing statements sent to their address. Likewise, if your lender or loan servicer provides an electronic payment service, where the monthly payments are automatically deducted from a bank account, your parents can agree to have the payments deducted from their account. But your parents are under no obligation to repay your loans. If they forget to pay the bill on time or decide to cancel the electronic payment agreement, you will be held responsible for the payments, not them."
	},
	{
		question: "If I take a leave of absence, do I have to start repaying my loans?",
		answer: "Not immediately. The subsidized Stafford loan has a grace period of 6 months and the Perkins loan a grace period of 9 months before the student must begin repaying the loan. When you take a leave of absence you will not have to repay your loan until the grace period is used up. If you use up the grace period, however, when you graduate you will have to begin repaying your loan immediately. It is possible to request an extension to the grace period, but this must be done before the grace period is used up. If your grace period has run out in the middle of your leave of absence, you will have to start making payments on your student loans."
	},
	{
		question: "When do I start paying back my student loans?",
		answer: "If you're attending school at least half-time, you have a period of time after you graduate, leave school, or drop below half-time status before you must begin repayment. This period of time is called a grace-period. Federal Perkins Loans- the grace period is nine months. If you're attending less than half-time, check with your financial aid office to determine your grace period. Direct Stafford Loans- the grace period is six months. Subsidized loan- during the grace period, you don't have to pay any principal and you won't be charged interest. Unsubsidized loan- you don't have to pay any principal, but you will be charged interest. You can either pay interest as you go along or it will be capitalized later."
	}
]

var registration = [
	{
		question: "How can I file for admission or readmission to Hunter College?",
		answer: "Please visit the Office of Admissions web page at http://www.hunter.cuny.edu/admissions for information on admission or readmission to Hunter College."
	},
	{
		question: "What is the cost of tuition and fees at Hunter College?",
		answer: "Please visit the Billing Page for information on tuition and fees. A Tuition Calculator is also available at this web page."
	},
	{
		question: "How can I view the Schedule of Classes?",
		answer: "You can also view the searchable schedule of classes by logging into your CUNYfirst account, select HR/Campus Solutions from the first menu after login, then click on Self Service ---> Student Center ---> Search for Classes (green button on the top right of the page.)"
	},
	{
		question: "How can I know what STOP/HOLD is on my record?",
		answer: "To see if you have any stops/holds on your record, log into your CUNYfirst account, then go to the Student Center in the Self Service area and look under 'Holds' in the upper right corner of that page.  Select 'Details' to determine the academic or administrative office that issued the stop/hold on your record. Reconcile the stop/hold by calling or visiting the issuing office. To view frequent stops/holds that may be placed on your student account, click this link. \n You may also see a 'Negative Service Indicator' mark (a small red crossed out circle) in your CUNYfirst account, which implies that you have a hold/stop on your account.  Click on the circle to determine the academic or administrative office that issued the stop/hold on your record. Reconcile the stop/hold by calling or visiting the issuing office. \n If you see Negative Service Indicators on your record from other CUNY colleges, you will NOT be prohibited by the system from registering for classes at Hunter College"
	},
	{
		question: "How do I register for classes?",
		answer: "Please visit the Hunter College Directory at www.hunter.cuny.edu. The directory lists all academic and administrative departments and faculty and staff."
	},
	{
		question: "When can I register for classes?",
		answer: "A semester/session registration date and time is based upon a student’s academic progress status as a currently enrolled student, is available at each student’s CUNYfirst account at https://home.cunyfirst.cuny.edu. After logging into CUNYfirst, select Self Service, then Student Center and you will see your registration dates listed on the right side under 'Enrollment Dates.'  Click 'Details' for more information.  *Once your registration date and time has passed, it will no longer appear in your CUNYfirst account.  Currently enrolled students are notified of an upcoming semester/session registration at their Hunter College email accounts as this information becomes available. It is strongly suggested that all students seek advisement prior to their registration date and time.\n You may register anytime on or after your appointment until the open registration cycle ends. You may not register before your posted date and time. Newly admitted degree students are notified of registration after they have paid a Commitment Fee by Graduate Admissions for graduate students and Advising Services for undergraduate students. Newly admitted and readmitted undergraduate non-degree and readmitted degree students as well as Senior Citizens are notified by Undergraduate Admissions. Readmitted graduate degree students and Graduate non-degree students are notified by Graduate Admissions."
	},
	{
		question: "How do I pay my tuition bill?",
		answer: "Tuition payments are made online via each student’s CUNYfirst account at https://home.cunyfirst.cuny.edu. Please visit the Office of the Bursar web page at the billing page for payment options."
	},
	{
		question: "How do I withdraw with a grade of W for a semester course(s)?",
		answer: "Once you register for a course it becomes part of your permanent record. If for any reason you do not attend, you must officially withdraw from the course on-line at your CUNYfirst Account before the term deadline date recorded in the Academic Calendar. A grade of W is posted to your record for the course(s) you have withdrawn from. There is no refund of tuition. W grades are not calculated in a student’s GPA, however they may adversely influence a student’s ability to receive financial aid or impede progress toward degree completion.For information regarding the possible effect of withdrawals upon financial aid, please visit:  http://www.hunter.cuny.edu/onestop/finances/financial-aid/how-does-withdrawal-affect-my-financial-aid. For program planning and degree completion counseling, consult with your academic advisor. Failure to follow this procedure will result in a grade of 'WU' which is equivalent to a failing grade of 'F'."
	},
	{
		question: "How do I file for NYS Tuition Resident rates?",
		answer: "Please visit the Office of the Registrar NYS Residency information page for information and the CUNY application for filing for NYS Resident Tuition. Questions regarding NYS Residency may be directed to residenc@hunter.cuny.edu."
	},
	{
		question: "How can I file for an ePermit to attend another CUNY college?",
		answer: "Please visit the City University web page at www.cuny.edu and visit your CUNY Portal account for information on CUNY ePermit procedures."
	},
	{
		question: "How can I declare my major or minor?",
		answer: "Please visit the 'Forms' section of the One Stop for Students webpage for both the undergraduate major and minor forms. The graduate minor forms are also available on this page.  Forms should be submitted to your academic approval. After receiving signed academic approval and bring the completed form to the One Stop for Students, Room 217 North, during posted office hours. Reminder: All students must present their Hunter College Student ID card for assistance with their record at the One Stop for Students. Graduate students who are considering changing their major should visit the Graduate web page for more information."
	},
	{
		question: "How can I change my permanent address or name on Hunter College records?",
		answer: "Please visit the Office of the Registrar web page and Select Forms and Documents for the Address and Name change form. All name changes must be accompanied by verifiable supporting documentation (i.e. Marriage License, Court Orders, Divorce Decrees, Birth Certificates, Immigration Papers). Bring the completed form to the One Stop for Students, Room 217 North, during posted office hours. Reminder: All students must present their Hunter College Student ID card for assistance with their record at the One Stop for Students."
	},
	{
		question: "How do I receive my grades?",
		answer: "As grades become available during and after the semester grading period, they are posted in your CUNYfirst account at https://home.cunyfirst.cuny.edu. It is the responsibility of each professor to submit grades for their courses so that they become available to students."
	},
	{
		question: "How and when should I apply for graduation?",
		answer: "Degree Audit Forms are available for both Undergraduate and Graduate students at the forms page. It is strongly suggested that students read the instructions and recommendations."
	},
	{
		question: "How can I request a transcript?",
		answer: "You may request your transcript online here. The regular transcript fee is $7.00 per transcript (except to CUNY colleges – which are free). There is a $2.00 additional fee for this online service. Official transcripts mailed directly to CUNY colleges will only be charged the $2.00 service fee. Please visit the web page above for more information. "
	},
	{
		question: "How do I register for hybrid or online courses?",
		answer: "Courses at Hunter College are taught in several different ways, from the traditional classroom environment, to courses that are conducted entirely online. Additionally, there are several options that combine online and classroom learning to varying degrees. A course's mode of instruction (http://www.hunter.cuny.edu/onestop/registration/course-modes-of-instruction-coding) describes its type of classroom environment. Students can find a course's mode of instruction in the searchable schedule of classes by looking under 'class details.' View the registration guides for more information on how to search for courses based on their mode of instruction." 
	}
];
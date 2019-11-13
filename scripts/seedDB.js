const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Articles collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/allabouteve"
);

// const categorySeed = [
//   {"name": "Birth Control", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Period", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Menopause", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Pregnancy", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Breastfeeding", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Community", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Articles", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())}
// ];

// const tagSeed = [
//   {"name": "Health Conditions and Diseases", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Nutrition and Physical Activity", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Babies and Toddlers", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Breast and Ovarian", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Cancer", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Cervical", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Colorectal", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Diabetes", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Doctor and Midwife Visits", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Doctor Visits", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Health Conditions and Diseases", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Heart", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "HIV and Other STDs", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Nutrition", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Nutrition and Physical Activity", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Obesity", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Older Adults", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Oral Health", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Osteoporosis", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Physical Activity", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Preeclampsia", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Pregnancy", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "uestions for the Doctor", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Screening Tests", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Sexual Health", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())},
//   {"name": "Women", "createdAt": new Date(Date.now()), "updatedAt": new Date(Date.now())}
// ];

const articleSeed = [
  {
    "itemId": 1,
    "type": "topic",
    "title": "Get Tested for Chlamydia and Gonorrhea",
    "url": "https://healthfinder.gov/HealthTopics/Category/health-conditions-and-diseases/hiv-and-other-stds/get-tested-for-chlamydia-and-gonorrhea",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Sexual Health", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 2,
    "type": "topic",
    "title": "Talk with a Doctor If Breast or Ovarian Cancer Runs in Your Family",
    "url": "https://healthfinder.gov/HealthTopics/Category/health-conditions-and-diseases/cancer/talk-with-a-doctor-if-breast-or-ovarian-cancer-runs-in-your-family",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Health Conditions and Diseases", "Questions for the Doctor", "Cancer", "Breast and Ovarian", "Doctor Visits"]
  },
  {
    "itemId": 3,
    "type": "topic",
    "title": "Get Your Well-Woman Visit Every Year",
    "url": "https://healthfinder.gov/HealthTopics/Category/everyday-healthy-living/sexual-health/get-your-well-woman-visit-every-year",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests"]
  },
  {
    "itemId": 4,
    "type": "topic",
    "title": "Eat Healthy",
    "url": "https://healthfinder.gov/HealthTopics/Category/health-conditions-and-diseases/diabetes/eat-healthy",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Nutrition and Physical Activity", "Nutrition", "Physical Activity"]
  },
  {
    "itemId": 5,
    "type": "topic",
    "title": "Have a Healthy Pregnancy",
    "url": "https://healthfinder.gov/HealthTopics/Category/pregnancy/doctor-and-midwife-visits/have-a-healthy-pregnancy",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Nutrition and Physical Activity", "Nutrition", "Physical Activity", "Pregnancy", "Obesity", "Questions for the Doctor", "Doctor Visits", "Doctor and Midwife Visits"]
  },
  {
    "itemId": 6,
    "type": "topic",
    "title": "Get a Bone Density Test",
    "url": "https://healthfinder.gov/HealthTopics/Category/doctor-visits/screening-tests/get-a-bone-density-test",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Nutrition and Physical Activity", "Nutrition", "Physical Activity", "Osteoporosis", "Older Adults", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 7,
    "type": "tool",
    "title": "Calcium: Shopping list",
    "url": "https://healthfinder.gov/HealthTopics/Category/nutrition-and-physical-activity/nutrition/calcium-shopping-list",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Nutrition and Physical Activity", "Nutrition", "Physical Activity"]
  },
  {
    "itemId": 8,
    "type": "topic",
    "title": "Get Tested for HIV",
    "url": "https://healthfinder.gov/HealthTopics/Category/health-conditions-and-diseases/hiv-and-other-stds/get-tested-for-hiv",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Screening Tests", "Sexual Health", "HIV and Other STDs", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 9,
    "type": "topic",
    "title": "Choose the Right Birth Control",
    "url": "https://healthfinder.gov/HealthTopics/Category/everyday-healthy-living/sexual-health/choose-the-right-birth-control",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Screening Tests", "Sexual Health", "HIV and Other STDs", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 10,
    "type": "topic",
    "title": "Breastfeed Your Baby",
    "url": "https://healthfinder.gov/HealthTopics/Category/pregnancy/getting-ready-for-your-baby/breastfeed-your-baby",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Babies and Toddlers", "Nutrition and Physical Activity", "Nutrition", "Physical Activity", "Pregnancy", "Obesity", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 11,
    "type": "topic",
    "title": "Talk with Your Doctor about Newborn Screening",
    "url": "https://healthfinder.gov/HealthTopics/Category/pregnancy/doctor-and-midwife-visits/talk-with-your-doctor-about-newborn-screening",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Babies and Toddlers", "Health Conditions and Diseases", "Screening Tests", "Pregnancy", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 12,
    "type": "topic",
    "title": "Get Tested for Breast Cancer",
    "url": "https://healthfinder.gov/HealthTopics/Category/doctor-visits/screening-tests/get-tested-for-breast-cancer",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Questions for the Doctor", "Cancer", "Breast and Ovarian", "Doctor Visits"]
  },
  {
    "itemId": 13,
    "type": "topic",
    "title": "Get Screened for Cervical Cancer",
    "imageUrl": "https://healthfinder.gov/HealthTopics/glmedia/icons/gettestedforcervicalcancer.jpg",
    "url": "https://healthfinder.gov/HealthTopics/Category/doctor-visits/screening-tests/get-screened-for-cervical-cancer",
    "sections": [
      {
        "title": "The Basics",
        "description": "You can help prevent cervical cancer by getting regular screening tests (called Pap tests) and follow-up care.",
        "content": "<p>Getting screened for cervical cancer means getting tested before you have any symptoms. Screening tests for cervical cancer include:</p><ul><li>Pap tests, also called Pap smears</li><li>HPV (human papillomavirus) tests</li></ul><p>These tests can help find cervical cells that are infected with HPV or other abnormal cells <strong>before</strong> they turn into cervical cancer.</p><p>Most cervical cancers can be prevented by regular screenings– and the right follow-up treatment when needed.</p><h3>How often should I get screened (tested)?</h3><p>How often you need to get screened depends on how old you are and which screening tests you get.</p><p>If you are age 21 to 29, get screened with a Pap test every 3 years.</p><p>If you are age 30 to 65, you have 3 options:</p><ul><li>Get screened every 3 years with a Pap test</li><li>Get screened every 5 years with an HPV test..</li><li>Get screened every 5 years with both a Pap test and an HPV test.</li></ul><p>Talk with your doctor about which option is right for you. Some women may also need to get screened more often. For example, your doctor may recommend that you get screened more often if you've had abnormal test results in the past.</p><p>If you are age 66 or older, ask your doctor if you need to continue getting screened for cervical cancer. </p><h3>What is cervical cancer?</h3><p>Cervical cancer is cancer of the cervix, which is the low, narrow part of the uterus that connects the uterus to the vagina.</p><p><img alt='Picture of a woman's lower reproductive organs including the fallopian tubes, ovaries, uterus, vagina, and cervix.' src='https://healthfinder.gov/HealthTopics/ContentImages/cerv_cancer.gif'/</p><p>Abnormal cells in the cervix can turn into cancer if they aren't found and treated. Cervical cancer is most commonly found in women who don't get regular screenings.</p><h3><strong>What causes cervical cancer?</strong></h3><p>Almost all cases of cervical cancer are caused by certain types of HPV (human papillomavirus). Some types of HPV cause genital warts, and others cause cancer. HPV is the most common infection spread through sex (vaginal, anal, and oral). </p><p>In most cases, HPV infections go away on their own. But when they last for a long time, they can cause cancer. <a href='https://www.cdc.gov/std/HPV/STDFact-HPV.htm'>Get more information on HPV infection.</a></p><p>Learn more about cervical cancer and screening:</p><ul><li><a href='http://www.cdc.gov/cancer/cervical/pdf/cervical_facts.pdf'>Cervical Cancer [PDF - 897 KB]</a></li><li><a href='https://www.cancer.gov/types/cervical/understanding-cervical-changes'>Understanding Cervical Changes: Next Steps After an Abnormal Screening Test</a></li><li><a href='https://www.cancer.gov/types/cervical/patient/cervical-screening-pdq#section/all'>Cervical Cancer Screening</a></li></ul><h3>What happens during cervical cancer screening tests?</h3><p>Cervical cancer screening tests usually happen as part of a pelvic exam. During this exam, you lie on your back on an exam table, bend your knees, and put your feet into stirrups.</p><p>While you lie on the exam table, the doctor or nurse will put a medical tool (called a speculum) into your vagina and open it to see your cervix. The doctor or nurse will use a special brush to collect some cells from your cervix. These cells will be sent to a lab, where an expert will check for abnormal cells or for the types of HPV that can cause cervical cancer.</p><p>These tests take about 5 minutes. It may feel uncomfortable, but it usually doesn't hurt. </p><p>Learn more about cervical screening tests:</p><ul><li><a href='https://medlineplus.gov/ency/article/003911.htm'>Pap tests</a></li><li><a href='https://medlineplus.gov/lab-tests/human-papillomavirus-hpv-test/'>HPV tests</a></li></ul><h4>What else happens during a pelvic exam?</h4><p>Cervical cancer screening is just part of a pelvic exam. During this exam, the doctor or nurse will also check your uterus, ovaries, and other organs.</p>"
      },
      {
        "title": "Take Action!",
        "description": "Call a doctor's office or health clinic to schedule a Pap test.",
        "content": "<p>Take these steps to help prevent cervical cancer.</p><h3>Schedule your cervical cancer screening test.</h3><p>Call a doctor's office or health clinic to schedule your cervical cancer screening test and pelvic exam. Schedule the test for a time when you won't have your period.</p><h3>Get ready for your test.</h3><p>Some things can cause incorrect Pap test results. Ask your doctor if you need to follow any special instructions before getting a cervical screening test.</p><h3>Find out your test results.</h3><p>When you get screened, ask the doctor how you will find out the results.</p><p>The kind of results you get can vary based on the type of test:</p><ul><li>Pap test results can be normal, unclear, or abnormal.</li><li>HPV test results can be positive or negative.</li></ul><p>It can take up to 3 weeks to get your results. If you don't hear back by then, call your doctor's office or clinic.<a href='https://www.cdc.gov/cancer/cervical/basic_info/test-results.htm'><strong>Get help understanding your cervical screening test results</strong></a><strong>.</strong></p><p>If your Pap test result is abnormal or your HPV test result is positive, it's important to get the follow-up care your doctor recommends.</p><h4>What about cost?</h4><p>Under the <a href='https://www.healthcare.gov/health-care-law-protections/'>Affordable Care Act</a>, the health care reform law passed in 2010, most insurance plans must cover screening for cervical cancer. Depending on your insurance plan, you may be able to get tested at no cost to you.</p><ul><li>If you have private insurance, check with your insurance provider to find out what's included in your plan.</li><li>If you don't have insurance, <a href='http://nccd.cdc.gov/dcpc_Programs/default.aspx?NPID=1'>find a program near you that offers free or low-cost cervical cancer screening tests</a><a href='https://nccd.cdc.gov/dcpc_Programs/index.aspx#/1'>.</a></li><li>If you have Medicare, <a href='http://www.medicare.gov/coverage/cervical-vaginal-cancer-screenings.html'>learn about Medicare coverage for Pap tests</a>.</li></ul><p>For information about other preventive services covered by the Affordable Care Act,<a href='https://www.healthcare.gov/what-are-my-preventive-care-benefits'> visit HealthCare.gov</a>.</p><h3>Get the HPV vaccine.</h3><p>The HPV vaccine is recommended for women age 26 and younger and for men age 21 and younger. Most people get it as a pre-teen–but if you didn't get it and you are 26 or younger, talk with your doctor about getting it now.</p><p>The vaccine protects against the types of HPV that most commonly cause cervical cancer. It may also protect against types that can cause other kinds of cancer and genital warts. <strong><a href='http://www.cdc.gov/hpv/parents/vaccine.html'>Learn more about the HPV vaccine</a></strong>.</p><h4>Get your child the HPV vaccine.</h4><p>All girls and boys need to get the HPV vaccine–usually at age 11 or 12, although your child can get it as early as age 9. If you have kids, <a href='https://healthfinder.gov/HealthTopics/Category/doctor-visits/shotsvaccines/get-your-child-the-hpv-vaccine'><strong>make sure they get the HPV vaccine</strong></a>.</p><h3>Get your well-woman visit every year.</h3><p>During your visit, talk to the doctor or nurse about other important screenings and services to help you stay healthy. Find out more about <a href='https://healthfinder.gov/HealthTopics/Category/everyday-healthy-living/sexual-health/get-your-well-woman-visit-every-year'>getting your well-woman visit every year</a>.</p>"
      },
      {
        "title": "Start Today: Small Steps",
        "description": "",
        "content": "<ul><li><a href='http://nccd.cdc.gov/dcpc_Programs/default.aspx?NPID=1'>Find a program near you that offers free or low-cost Pap tests</a>.</li><li>If you are under age 27, ask your doctor about getting the HPV vaccine.</li><li><a href='http://www.mayoclinic.org/tests-procedures/pelvic-exam/basics/definition/prc-20013064?p=1'>Find out what to expect when you get a pelvic exam.</a></li></ul>"
      }
    ],
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Cancer", "Cervical"],
    "createdAt": new Date(Date.now()),
    "updatedAt": "2018-11-30 12:30:53.0Z"
  },
  {
    "itemId": 14,
    "type": "topic",
    "title": "Get Tested for Colorectal Cancer",
    "url": "https://healthfinder.gov/HealthTopics/Category/doctor-visits/screening-tests/get-tested-for-colorectal-cancer",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Questions for the Doctor", "Cancer", "Colorectal", "Doctor Visits"]
  },
  {
    "itemId": 15,
    "type": "topic",
    "title": "Get Screened",
    "url": "https://healthfinder.gov/HealthTopics/Category/doctor-visits/screening-tests/get-screened",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Nutrition and Physical Activity", "Nutrition", "Physical Activity", "Osteoporosis", "Older Adults", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 16,
    "type": "topic",
    "title": "Get Your Blood Pressure Checked",
    "url": "https://healthfinder.gov/HealthTopics/Category/doctor-visits/screening-tests/get-your-blood-pressure-checked",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Older Adults", "Heart", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 17,
    "type": "topic",
    "title": "Get Your Cholesterol Checked",
    "url": "https://healthfinder.gov/HealthTopics/Category/doctor-visits/screening-tests/get-your-cholesterol-checked",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Older Adults", "Heart", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 18,
    "type": "topic",
    "title": "Keep Your Heart Healthy",
    "url": "https://healthfinder.gov/HealthTopics/Category/health-conditions-and-diseases/heart-health/keep-your-heart-healthy",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Older Adults", "Heart", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 19,
    "type": "topic",
    "title": "Get Enough Folic Acid",
    "imageUrl": "https://healthfinder.gov/HealthTopics/glmedia/icons/getenoughfolicacid.jpg",
    "url": "https://healthfinder.gov/HealthTopics/Category/nutrition-and-physical-activity/nutrition/get-enough-folic-acid",
    "sections": [
      {
        "title": "The Basics",
        "description": "Women of childbearing age need an extra 400 micrograms (mcg) of folic acid each day. Folic acid is a vitamin that can help prevent birth defects.",
        "content": "<p>All women who are able to get pregnant or planning to get pregnant need 400 micrograms (mcg) of folic acid every day. Folic acid is found in some vitamins and foods like breakfast cereal or bread that have folic acid added.</p><h3>Why is folic acid important?</h3><p>Everyone needs folic acid, but it's especially important if you are pregnant or may become pregnant. Folic acid is a vitamin that can prevent birth defects.</p><p>Getting enough folic acid is important even when you aren't planning to get pregnant. It's needed during the first few weeks of pregnancy, often before a woman knows she's pregnant.</p><p>Talk with your doctor about folic acid. </p><h3>How can I get enough folic acid?</h3><p>Getting enough folic acid every day is easy. You can eat foods like breakfast cereal or bread that have folic acid added. Or you can take a vitamin with folic acid.</p><h4>Look for breakfast cereal with folic acid.</h4><p>Check the Nutrition Facts label on the side of the box to see how much folic acid the cereal has. Choose cereal that has 100% DV (Daily Value) of folic acid.</p><h4>Take a vitamin with folic acid.</h4><p>You can take a multivitamin or a pill that has only folic acid. Vitamins and folic acid pills can be found at most pharmacies and grocery stores. <a href='https://www.womenshealth.gov/a-z-topics/folic-acid#11'>Get tips for choosing a vitamin with folic acid</a>.</p>"
      },
      {
        "title": "Take Action!",
        "description": "Check the label of your favorite cereal to see if it has 100% DV (Daily Value) of folic acid.",
        "content": "<p>It's easy to get the folic acid you need. Just eat a bowl of cereal with 100% DV of folic acid–or take a vitamin with 100% DV of folic acid– every day.</p><h3>Check the label.</h3><p>When you are at the grocery store, look for foods with folic acid in them. Choose cereal that has 100% DV of folic acid.</p><p>Folic acid is also in foods like enriched breads, pastas, and other foods made with grains. Check the Nutrition Facts label.</p><p>If you buy vitamins, be sure to check the label for folic acid. This label shows a vitamin with 100% DV of folic acid.</p><p><img alt='nutrition label with folic acid highlighted' src='https://healthfinder.gov/HealthTopics/glmedia/folic_acid2.jpg'/</p><h3>If you take a vitamin, make it easy to remember.</h3><ul><li>Take it at the same time every day. For example, take it when you brush your teeth in the morning or when you eat breakfast.</li><li>Leave the vitamin bottle somewhere you will notice it every day, like on the kitchen counter.</li></ul><h4>What about cost?</h4><p>The <a href='https://www.healthcare.gov/health-care-law-protections/'>Affordable Care Act</a>, the health care reform law passed in 2010, requires most health plans to cover folic acid supplements (pills). Depending on your insurance, you may be able to get folic acid supplements at no cost to you.</p><p>Talk to your insurance company to find out what's included in your plan. For information about other services covered by the Affordable Care Act, <a href='https://www.healthcare.gov/what-are-my-preventive-care-benefits'>visit HealthCare.gov</a>.</p><h3>Eat healthy.</h3><p><a href='https://healthfinder.gov/HealthTopics/Category/health-conditions-and-diseases/diabetes/eat-healthy'>Eating healthy</a> means following a healthy eating pattern that includes a variety of nutritious foods and drinks. It also means getting the number of calories that's right for you (not eating too much or too little).</p><p>Use your calories to eat a variety of foods. To eat healthy, be sure to choose:</p><ul><li>Vegetables</li><li>Fruits</li><li>Whole grains</li><li>Fat-free or low-fat dairy products</li><li>A variety of foods with protein, including seafood, lean meats and poultry, eggs, beans, peas, nuts, seeds, and soy products</li></ul><h4>Eat foods with folate, too.</h4><p>Many healthy foods also have folate (a type of folic acid that is found naturally in some foods).</p><p>In addition to eating cereal with 100% DV of folic acid or taking a vitamin with 100% DV of folic acid, it's important for women to eat foods with folate, such as:</p><ul><li>Spinach and other leafy greens</li><li>Asparagus</li><li>Oranges and orange juice</li><li>Beans and peas</li></ul><p><a href='http://ods.od.nih.gov/factsheets/Folate-HealthProfessional/#h3'>Check out this list of foods with folic acid and folate</a>.</p>"
      },
      {
        "title": "Start Today: Small Steps",
        "description": "",
        "content": "<ul><li><a href='http://www.cdc.gov/ncbddd/folicacid/documents/FactsAboutFolicAcid_English.pdf'>Check out this fact sheet on folic acid [PDF - 612 KB]</a>.</li><li>Tell a friend how important it is to get enough folic acid, especially if she might get pregnant some day.</li><li><a href='http://www.cdc.gov/ncbddd/folicacid/cereals.html'>Try one of these cereals with 100% DV of folic acid per serving</a>.</li></ul>"
      }
    ],
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-03-25 14:27:06.0Z",
    "tags": ["Women", "Nutrition and Physical Activity", "Nutrition", "Physical Activity", "Pregnancy"]
  },
  {
    "itemId": 20,
    "type": "topic",
    "title": "Protect Your Health As You Grow Older",
    "url": "https://healthfinder.gov/HealthTopics/Category/nutrition-and-physical-activity/physical-activity/protect-your-health-as-you-grow-older",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Older Adults", "Heart", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 21,
    "type": "topic",
    "title": "Make the Most of Your Baby's Visit to the Doctor (Ages 0 to 11 Months)",
    "url": "https://healthfinder.gov/HealthTopics/Category/parenting/doctor-visits/make-the-most-of-your-babys-visit-to-the-doctor-ages-0-to-11-months",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Babies and Toddlers", "Health Conditions and Diseases", "Screening Tests", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 22,
    "type": "topic",
    "title": "Get Support If You Are a Caregiver",
    "url": "https://healthfinder.gov/HealthTopics/Category/everyday-healthy-living/mental-health-and-relationship/get-support-if-you-are-a-caregiver",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Older Adults", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 23,
    "type": "topic",
    "title": "Take Care of Your Teeth and Gums",
    "url": "https://healthfinder.gov/HealthTopics/Category/doctor-visits/regular-check-ups/take-care-of-your-teeth-and-gums",
    "createdAt": new Date(Date.now()),
    "updatedAt": new Date(Date.now()),
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Older Adults", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 24,
    "type": "tool",
    "title": "HIV Testing: Questions for the doctor",
    "imageUrl": "https://www.healthfinder.gov/HealthTopics/glmedia/tools_icons/hivtestingquestionsforthedoctor.jpg",
    "url": "https://www.healthfinder.gov/HealthTopics/Category/health-conditions-and-diseases/hiv-and-other-stds/hiv-testing-questions-for-the-doctor",
    "moreInfoTitle": "For more information about HIV testing, visit:",
    "moreInfo": [{
      "title": "HIV Testing",
      "url": "http://www.cdc.gov/hiv/basics/testing.html"
    }],
    "content": "<p>HIV is the virus that causes AIDS. If you have HIV (also called being HIV-positive), early treatment can help you live a longer, healthier life.</p><p>The only way to know if you have HIV is to get tested. Everyone ages 15 to 65 needs to get tested for HIV at least once. All pregnant women also need to get tested.</p><p>If you get tested at a doctor's office or clinic, you can ask for a <strong>confidential</strong> test. The test results will be shared only with people allowed to see your medical records. Some clinics offer <strong>anonymous</strong> HIV testing. This means that you don't have to give your name.</p><p>Under the health care reform law, insurance plans must cover HIV testing. Depending on your insurance plan, you may be able to get HIV counseling at no cost to you. Talk to your insurance company to find out more.</p><h2>What do I ask the doctor?</h2><p>Visiting the doctor can be stressful. It helps to have questions written down before your appointment. Print this list of questions and take it with you when you visit the doctor or health clinic.</p><ul><li>Should I get tested for HIV?</li><li>What puts me at risk for HIV?</li><li>How will you test me for HIV?</li><li>Who will see my test results?</li><li>How long will it take to get my test results?</li><li>How will I find out my results?</li><li>Should I get tested for any other STDs (sexually transmitted diseases)?</li><li>If I have HIV, what will happen next?</li></ul><p>If you learn you don't have HIV during the visit, you might want to ask these questions.</p><ul><li>How can I protect myself from HIV?</li><li>When do I need to get tested again?</li><li>Does my sex partner still need to get tested for HIV?</li><li>Do you offer counseling on HIV prevention? If you don't, can you recommend a place that does?</li></ul>",
    "createdAt": new Date(Date.now()),
    "updatedAt": "2018-11-30 10:30:07.0Z",
    "tags": ["Women", "Screening Tests", "Sexual Health", "HIV and Other STDs", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 25,
    "type": "tool",
    "title": "Stay Active During Pregnancy: Quick tips",
    "imageUrl": "https://www.healthfinder.gov/HealthTopics/glmedia/tools_icons/stayactiveduringpregnancyquicktips.jpg",
    "url": "https://www.healthfinder.gov/HealthTopics/Category/health-conditions-and-diseases/obesity/stay-active-during-pregnancy-quick-tips",
    "moreInfoTitle": "For more information about being active during pregnancy, check out:",
    "moreInfo": [
      {
        "title": "Staying Healthy and Safe During Pregnancy",
        "url": "https://www.womenshealth.gov/pregnancy/youre-pregnant-now-what/staying-healthy-and-safe#b"
      },
      {
        "title": "Health Tips for Pregnant Women",
        "url": "https://www.niddk.nih.gov/health-information/weight-management/health-tips-pregnant-women?dkrd=hispt0912"
      }
    ],
    "content": "<p>Physical activity is important for everyone, including women who are pregnant. Staying active during pregnancy can help you have a more comfortable pregnancy. It may also help reduce the risk of complications during pregnancy.</p><p>If you were already physically active before your pregnancy, it's healthy to keep it up. If you weren't physically active before your pregnancy, it's not too late to start!</p><h2>Before you start...</h2><p>Talk to your doctor about getting active during your pregnancy. As long as there isn't a medical reason for you to avoid physical activity during your pregnancy, you can do moderate-intensity physical activity.</p><h2>Aim for 2 hours and 30 minutes a week of moderate-intensity aerobic activities.</h2><ul><li>If you weren't getting active before, start slowly. Even 5 minutes of physical activity has real health benefits. Build up to more over time.</li><li>Choose aerobic activities– activities that make your heart beat faster– like walking fast, dancing, swimming, or raking leaves.</li><li>Be sure to drink extra water before, during, and after getting active.</li><li>Take a break if you get short of breath or feel uncomfortable.</li></ul><h2>Follow these tips when you do muscle-strengthening activities.</h2><ul><li>Don't strain to lift heavy weights. Instead, do more repetitions (lifts) with lighter weights. You can also use bottles of water or cans of food as weights.</li><li>Make sure you're not holding your breath. Breathe out as you lift the weight, and breathe in as you lower it.</li></ul><h2>Avoid high-risk activities.</h2><ul><li>Avoid doing any activities while lying on your back after the first trimester (12 weeks).</li><li>Stay away from activities that increase your risk of falling, like downhill skiing or horseback riding.</li><li>Avoid playing sports where you could get hit in the stomach, like basketball or soccer.</li><li>Don't scuba dive while you're pregnant.</li></ul>",
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-06-24 13:11:27.0Z",
    "tags": ["Women", "Nutrition and Physical Activity", "Nutrition", "Physical Activity", "Pregnancy", "Obesity", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 26,
    "type": "tool",
    "title": "Mammograms: Questions for the doctor",
    "imageUrl": "https://www.healthfinder.gov/HealthTopics/glmedia/tools_icons/mammogramsquestionsforthedoctor.jpg",
    "url": "https://www.healthfinder.gov/HealthTopics/Category/doctor-visits/talking-with-the-doctor/mammograms-questions-for-the-doctor",
    "moreInfoTitle": "For more information about mammograms, visit:",
    "moreInfo": [
      {
        "title": "Mammograms",
        "url": "https://www.cancer.gov/types/breast/mammograms-fact-sheet"
      },
      {
        "title": "Mammograms",
        "url": "http://womenshealth.gov/publications/our-publications/fact-sheet/mammograms.html"
      }
    ],
    "content": "<p>A mammogram is an x-ray picture of the breast to check for breast cancer. Mammograms can help find breast cancer early, before it spreads to other parts of the body. Most women can survive breast cancer if it's found and treated early.</p><ul><li>If you are age 40 to 49, talk with your doctor about when to start getting mammograms and how often to get them.</li><li>If you are age 50 to 74, get mammograms every 2 years. You may also choose to get them more often.</li></ul><p>Together, you and your doctor can decide what's best for you.</p><p>The Affordable Care Act requires most health plans to cover mammograms for women over age 40. Depending on your insurance plan, you may be able to get mammograms at no cost to you. Talk to your insurance company to learn more.</p><p>Like all medical tests, mammograms have pros and cons. These pros and cons depend on your age and your risk for breast cancer. Use the questions below to start a conversation with your doctor about mammograms.</p><h2>What do I ask the doctor?</h2><p>Visiting the doctor can be stressful. It helps to have questions for the doctor written down ahead of time. Print this list of questions and take it with you to your next appointment. You may also want to ask a family member or close friend to go with you to take notes.</p><ul><li>Do I have any risk factors that increase my chances of getting breast cancer?</li><li>What will happen when I go to get mammograms?</li><li>How long will it take to get the results of my mammograms?</li><li>If I don't hear back about the results of my mammograms, does that mean everything is okay?</li></ul><p>If you are under age 50, you might want to ask:</p><ul><li>Should I start getting regular mammograms? If so, how often?</li><li>What are the pros and cons of getting mammograms before age 50?</li></ul><p>If you are age 50 to 74, you might want to ask:</p><ul><li>How often should I get mammograms?</li><li>What are the pros and cons of getting mammograms every 2 years instead of every year?</li></ul>",
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-04-29 9:55:49.0Z",
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Questions for the Doctor", "Cancer", "Breast and Ovarian", "Doctor Visits"]
  },
  {
    "itemId": 27,
    "type": "topic",
    "title": "Get Enough Calcium",
    "imageUrl": "https://healthfinder.gov/HealthTopics/glmedia/icons/getenoughcalcium.jpg",
    "url": "https://healthfinder.gov/HealthTopics/Category/nutrition-and-physical-activity/nutrition/get-enough-calcium",
    "sections": [
      {
        "title": "The Basics",
        "description": "Get enough calcium every day to keep your bones strong. Calcium can help prevent osteoporosis (bone loss).",
        "content": "<p>Your body needs calcium to build strong bones when you are young and to keep bones strong as you get older. Everyone needs calcium, but it's especially important for women and girls. Many people, including most women, don't get enough calcium.</p><h3>How much calcium do I need every day?</h3><h4>Women:</h4><ul><li>If you are age 19 to 50, get 1,000 mg (milligrams) of calcium every day.</li><li>If you are age 51 or older, get 1,200 mg of calcium every day.</li><li>If you are pregnant or lactating, get 1,300 mg of calcium every day.</li></ul><h4>Men:</h4><ul><li>If you are ages 19 to 70, get 1,000 mg of calcium every day.</li><li>If you are age 71 or older, get 1,200 mg of calcium every day.</li></ul><h4>Kids:</h4><ul><li>Kids ages 1 to 3 need 700 mg of calcium every day.</li><li>Kids ages 4 to 8 need 1,000 mg of calcium every day.</li><li>Kids ages 9 to 18 need 1,300 mg of calcium every day.</li></ul><h3>Calcium can help prevent osteoporosis (weak bones).</h3><p>Osteoporosis ('os-tee-oh-puh-ROH-sis') is a disease that makes your bones weak and more likely to break. Some people don't know they have it until they break a bone.</p><p>One in 4 women and 1 in 20 men over the age of 65 in the U.S. have osteoporosis. Calcium helps to keep your bones strong and less likely to break.</p><h3>How can I get enough calcium?</h3><p>The best way to get enough calcium is to eat foods with calcium every day.</p><p>Calcium is in foods like:</p><ul><li>Fat-free or low-fat (1%) milk, yogurt, and cheese</li><li>Soymilk with added calcium, vitamin A, and vitamin D</li><li>Certain vegetables, including soybeans, collard greens, and turnip greens</li><li>Tofu with added calcium</li><li>Orange juice with added calcium</li><li>Breakfast cereal with added calcium</li></ul><p>For more ideas, <a href='http://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/#h3'>check out this list of foods that are high in calcium</a>.</p><p>Getting calcium from foods is best. But if you don't eat enough foods with calcium, you can take a calcium supplement (pill) every day. You can take a multivitamin with calcium or a pill that has only calcium. Talk to your doctor before you start taking extra calcium.</p>"
      },
      {
        "title": "Take Action!",
        "description": "Look for foods with added calcium, like breakfast cereal or orange juice.",
        "content": "<p>Protect your bones– get plenty of calcium every day.</p><h3>Check food labels.</h3><p>The Daily Value (DV) on a food label tells you the amount of a nutrient (like calcium) that's in a serving of the food. Foods that have at least 20% DV of calcium are excellent choices. Foods with at least 10% DV of calcium are good, too.</p><p>For example:</p><ul><li>A cup of fat-free milk has about 300 mg of calcium, or 30% DV.</li><li>A cup of orange juice with added calcium has about 350 mg of calcium, or 35% DV.</li></ul><p>Learn how to <a href='http://www.bestbonesforever.org/parents/foods/food_label.html'>check food labels for calcium information.</a></p><p><a href='https://healthfinder.gov/HealthTopics/Category/nutrition-and-physical-activity/nutrition/calcium-shopping-list'>Use this calcium shopping list</a> to find foods high in calcium when you are at the grocery store.</p><h3>If you take a calcium supplement, make it easy to remember.</h3><ul><li>Take it at the same time every day. For example, take it when you brush your teeth before bed.</li><li>Leave the pill bottle out where you will see it, like on the kitchen counter or by the bathroom sink.</li></ul><h3>Get enough vitamin D.</h3><p>Vitamin D helps your body absorb (take in) calcium. <a href='http://ods.od.nih.gov/factsheets/VitaminD-QuickFacts/#h2'>Find out how much vitamin D you need each day</a>.</p><p>Your body makes vitamin D when you are out in the sun. You can also get vitamin D from:</p><ul><li>Salmon and tuna</li><li>Milk with added vitamin D</li><li>Some breakfast cereals, yogurt, and juices with added vitamin D</li><li>Vitamin D pills</li></ul><p>Talk to your doctor before taking vitamin D pills.</p><h3>Follow a healthy eating pattern.</h3><p>Along with eating foods high in calcium, it's important to follow a healthy eating pattern. That means eating a variety of vegetables, fruits, whole grains, and foods with protein.</p>"
      },
      {
        "title": "Start Today: Small Steps",
        "description": "",
        "content": "<ul><li>Make a smoothie with fat-free or low-fat milk, fruit, and ice in the blender.</li><li><a href='http://www.bestbonesforever.org/Files/grocery_list.pdf'>Shop for these foods high in calcium and vitamin D [PDF - 236 KB].</a></li><li>Ask your doctor if a calcium or vitamin D pill is right for you.</li></ul>"
      }
    ],
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-04-22 14:12:52.0Z",
    "tags": ["Women", "Nutrition and Physical Activity", "Nutrition", "Physical Activity"]
  },
  {
    "itemId": 28,
    "type": "tool",
    "title": "Preventing Osteoporosis: Questions for the doctor",
    "imageUrl": "https://www.healthfinder.gov/HealthTopics/glmedia/tools_icons/preventingosteoporosisquestionsforthedoctor.jpg",
    "url": "https://www.healthfinder.gov/HealthTopics/Category/doctor-visits/talking-with-the-doctor/preventing-osteoporosis-questions-for-the-doctor",
    "moreInfoTitle": "For more information about osteoporosis, check out:",
    "moreInfo": [{
      "title": "Osteoporosis",
      "url": "https://www.womenshealth.gov/a-z-topics/osteoporosis"
    }],
    "content": "<p>Osteoporosis is a bone disease that makes bones weaker and more likely to break. Anyone can get osteoporosis, but it's most common in older women.</p><p>Ask your doctor or nurse about steps you can take to prevent weak bones and lower your risk for osteoporosis. If you're a woman age 65 or older, <a href='https://healthfinder.gov/HealthTopics/ViewTopic.aspx?topicId=12'>schedule a bone density test</a>. And if you're age 64 or younger and you've gone through menopause, ask your doctor if you need to get a bone density test.</p><h2>What do I ask the doctor?</h2><p>When you visit the doctor, it helps to have questions written down ahead of time. You can also ask a family member or friend to go with you to take notes. Print this list of questions and take it to your next appointment.</p><ul><li>Am I at risk for osteoporosis?</li><li>What puts me at risk for osteoporosis?</li><li>What can I do to help prevent osteoporosis?</li><li>What steps can I take to help prevent falls and injuries?</li><li>Am I currently taking any medicines that cause bone loss?</li><li>How much calcium and vitamin D do I need each day?</li><li>Do you recommend that I get a bone density test?</li><li>If I have osteoporosis, what are my treatment options?</li><li>Can you give me some information about osteoporosis to take home with me? </li></ul>",
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-08-12 16:41:01.0Z",
    "tags": ["Women", "Nutrition and Physical Activity", "Nutrition", "Physical Activity", "Osteoporosis", "Older Adults", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 29,
    "type": "tool",
    "title": "Eat Healthy During Pregnancy: Quick tips",
    "imageUrl": "https://www.healthfinder.gov/HealthTopics/glmedia/tools_icons/eathealthyduringpregnancyquicktips.jpg",
    "url": "https://www.healthfinder.gov/HealthTopics/Category/pregnancy/nutrition-and-physical-activity/eat-healthy-during-pregnancy-quick-tips",
    "moreInfoTitle": "For more information on healthy eating during pregnancy, visit:",
    "moreInfo": [
      {
        "title": "Health & Nutrition Information",
        "url": "https://www.choosemyplate.gov/browse-by-audience/view-all-audiences/adults/moms-pregnancy-breastfeeding"
      },
      {
        "title": "Staying healthy and safe",
        "url": "https://www.womenshealth.gov/pregnancy/youre-pregnant-now-what/staying-healthy-and-safe"
      }
    ],
    "content": "<p>When you are pregnant, you need more of certain nutrients like protein, iron, folic acid, and iodine. It's also important to get enough calcium.</p><p>Making smart food choices can help you have a healthy pregnancy and a healthy baby. Here are some ideas to help you eat healthy during pregnancy.</p><h2>Follow a healthy eating pattern.</h2><p>Eating healthy means following a healthy eating pattern that includes a variety of nutritious foods and drinks.</p><ul><li>Eat a variety of vegetables, fruits, whole grains, fat-free or low-fat dairy products, and protein foods.</li><li>Choose foods and drinks with less added sugars, saturated fats, and sodium (salt).</li><li>Limit refined grains and starches, which are in foods like cookies, white bread, and some snack foods.</li><li>If you are feeling sick, try eating a piece of whole-grain toast or whole-grain crackers.</li></ul><p><a href='https://healthfinder.gov/healthtopics/category/everyday-healthy-living/nutrition/eat-healthy'>Learn more about eating healthy</a>.</p><h2>Get the right amount of calories for you.</h2><p>Being pregnant doesn't mean you need to eat twice as much food.</p><ul><li>First trimester (first 12 weeks)– Most women don't need any extra calories.</li><li>Second trimester (13 to 26 weeks)– Most women need about 340 extra calories a day.</li><li>Last trimester (after 26 weeks)– Most women need about 450 extra calories a day.</li></ul><p>Ask your doctor or midwife how many calories you need during pregnancy.</p><p><a href='https://www.choosemyplate.gov/MyPlatePlan'>Create a personalized Daily Food Plan</a>.</p><p><strong>Make healthy snack choices. </strong><br />Examples of healthy snacks include:</p><ul><li>Low-fat or fat-free yogurt with fruit (look for options with no added sugar)</li><li>Whole-grain crackers with fat-free or low-fat cheese</li><li>Carrots with hummus</li></ul><h2>Take a prenatal vitamin with folic acid, iron, and iodine every day.</h2><ul><li><a href='https://healthfinder.gov/healthtopics/population/women/pregnancy/get-enough-folic-acid'>Folic acid</a> helps prevent some birth defects of the brain and spine.</li><li><a href='https://ods.od.nih.gov/factsheets/Iron-Consumer/'>Iron</a> and <a href='https://ods.od.nih.gov/factsheets/Iodine-Consumer/'>iodine</a> help keep you and your baby healthy.</li></ul><p>Talk with your doctor or nurse about a prenatal vitamin that's right for you.</p><h2>Eat 8 to 12 ounces of seafood each week.</h2><p>Fish and shellfish have healthy fats that are good for you and your baby. But some fish is high in mercury, a metal that can hurt your baby's development. It's a good idea to eat seafood that is high in healthy fats but lower in mercury.</p><h3>Best choices</h3><p>These choices are lower in mercury, so you can eat 8 to 12 ounces a week.</p><ul><li>Canned light tuna</li><li>Catfish</li><li>Cod</li><li>Herring</li><li>Oysters</li><li>Salmon</li><li>Shad</li><li>Shrimp</li><li>Tilapia</li><li>Trout</li></ul><h3>Good choices</h3><p>You can eat 4 ounces of these fish a week if you don't eat any other seafood that week.</p><ul><li>Canned or fresh white (albacore) tuna</li><li>Chilean sea bass or striped bass</li><li>Grouper</li><li>Halibut</li><li>Mahi-mahi</li><li>Snapper</li><li>Yellowfin tuna</li></ul><h3>Fish to avoid</h3><p>Don't eat bigeye tuna, king mackerel, marlin, orange roughy, shark, swordfish, or tilefish. They are high in mercury.</p><p><a href='https://www.fda.gov/downloads/Food/ResourcesForYou/Consumers/UCM536323.pdf'>Learn more about choosing fish that is healthy and safe to eat [PDF - 308 KB]</a>.</p><h2>Don't eat certain foods.</h2><p>These foods may have bacteria in them that can hurt your baby. Stay away from:</p><ul><li>Raw (uncooked) or rare (undercooked) fish or shellfish, like sushi or raw oysters</li><li>Soft cheeses (like feta, Brie, and goat cheese), unless they are pasteurized</li><li>Raw or rare meats, poultry, or eggs</li><li>Unpasteurized juices or milk</li><li>Lunch or deli meats, smoked seafood, and hot dogs– unless they are heated until steaming hot</li><li>Prepared salads like ham salad, chicken salad, or seafood salad</li><li>Raw sprouts, including alfalfa, clover, radish, and mung bean sprouts</li></ul><p><a href='https://www.foodsafety.gov/risk/pregnant/chklist_pregnancy.html'>Learn more about foods to avoid during pregnancy</a>.</p><h2>Limit drinks with caffeine and added sugars.</h2><ul><li>If you drink coffee or tea, choose decaf. Pick unsweetened options and don't add sugar.</li><li>Drink water or seltzer instead of drinks with added sugars like soda, fruit drinks, and energy or sports drinks.</li></ul><h2>Don't drink alcohol.</h2><p>No amount of alcohol is safe during pregnancy.</p>",
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-02-26 13:11:42.0Z",
    "tags": ["Women", "Nutrition and Physical Activity", "Nutrition", "Physical Activity", "Pregnancy", "Obesity", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 30,
    "type": "tool",
    "title": "Heart Health: Conversation starters",
    "imageUrl": "https://www.healthfinder.gov/HealthTopics/glmedia/tools_icons/hearthealthconversationstarters.jpg",
    "url": "https://www.healthfinder.gov/HealthTopics/Category/health-conditions-and-diseases/heart-health/heart-health-conversation-starters",
    "moreInfoTitle": "",
    "moreInfo": [],
    "content": "<p>It can be hard to talk to a family member or friend about making healthy lifestyle changes. Use these tips to start a conversation about heart-healthy changes like quitting smoking or getting more physical activity. </p><h2>Begin by saying that you care.</h2><p>You can say:</p><ul><li>'I want you to live a long and healthy life.'</li><li>'I hope you'll be around for a long time.'</li><li>'I want to help you make healthy changes so you can keep enjoying the things you love to do.'</li></ul><h2>Share the facts.</h2><p>Let your loved one know how serious heart disease can be:</p><ul><li>'Heart disease is the leading cause of death for both men and women in the United States.'</li><li>'Heart disease causes more deaths in the United States than all types of cancer combined.'</li></ul><h2>Explain that it's possible to prevent heart disease.</h2><p>Encourage your loved one to take steps that can improve heart health. For example, you can say:</p><ul><li>Eating healthy is important for heart health. You need plenty of fruits, vegetables, whole grains, and fat-free or low-fat dairy products. Why don't we go shopping and cook a healthy meal together?</li><li>Getting active is good for your heart. Let's go for a walk after dinner!</li><li>Quitting smoking can lower your risk of heart disease– and you can get free help at 1-800-QUIT-NOW (1-800-784-8669).</li></ul><h2>Offer to help.</h2><p>Ask how you can help:</p><ul><li>'What changes are the hardest for you to make? What can I do to support you?'</li><li>'How can we get healthy together?'</li><li>'You don't have to do this alone. How can I help?'</li></ul><p>For more information on preventing heart disease, check out: </p><ul><li><a href='https://www.nhlbi.nih.gov/health-topics/heart-healthy-lifestyle-changes'>Heart-Healthy Lifestyle Changes</a></li><li><a href='https://www.nhlbi.nih.gov/health-topics/dash-eating-plan'>DASH Eating Plan</a></li><li><a href='https://millionhearts.hhs.gov/'>Million Hearts<span >&reg;</span></ul>",
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-09-03 12:15:31.0Z",
    "tags": ["Women", "Health Conditions and Diseases", "Older Adults", "Heart", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 31,
    "type": "tool",
    "title": "Menopause: Questions for the doctor",
    "imageUrl": "https://www.healthfinder.gov/HealthTopics/glmedia/tools_icons/menopausequestionsforthedoctor.jpg",
    "url": "https://www.healthfinder.gov/HealthTopics/Category/doctor-visits/talking-with-the-doctor/menopause-questions-for-the-doctor",
    "moreInfoTitle": "For more information about menopause, visit:",
    "moreInfo": [
      {
        "title": "What is menopause?",
        "url": "https://www.nia.nih.gov/health/publication/menopause"
      },
      {
        "title": "Menopause",
        "url": "http://womenshealth.gov/menopause"
      }
    ],
    "content": "<p>Menopause is when women stop getting their period. Some people call it the change.' Menopause is different for each woman, but most women naturally reach menopause around age 50.</p><p>As you get closer to menopause, your ovaries make less and less of female hormones called estrogen ('ES-tra-jin') and progesterone ('pro-JES-ter-own'). Eventually, your ovaries stop making these hormones completely.</p><p>It can take 2 to 8 years to go through menopause. Menopause is finished when you haven't had a period in 12 months. Once you've finished menopause, you won't be able to get pregnant.</p><p>Symptoms of menopause can include:</p><ul><li>Irregular bleeding (more or less often than usual)</li><li>Hot flashes</li><li>Night sweats</li><li>Mood swings</li><li>Trouble sleeping</li><li>More or less interest in sex</li><li>Vaginal dryness</li></ul><p>The good news is, there's a lot you can do to help with these symptoms. Start by talking with your doctor.</p><h2>What do I ask the doctor?</h2><p>Visiting the doctor can be stressful. It helps to have questions written down ahead of time. Print this list of questions and take it with you to your next appointment.</p><ul><li>How do I know if I'm going through menopause?</li><li>How do I know if the changes in my period are from menopause or a sign of a problem?</li><li>What other changes can I expect?</li><li>Is there something I can do to control hot flashes?</li><li>Are there changes I can make to my diet and physical activity to stay healthy during menopause?</li><li>What is hormone therapy, and is it a good idea for me?</li><li>Are there alternative therapies, like herbal supplements, that might help my symptoms?</li><li>What other steps can I take to help my symptoms?</li><li>When can I stop using birth control?</li><li>What can I do to stay healthy as I get older?</li></ul>",
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-02-26 14:29:26.0Z",
    "tags": ["Women", "Health Conditions and Diseases", "Older Adults", "Sexual Health", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 32,
    "type": "tool",
    "title": "Genetic Testing to Learn about Your Risk of Breast and Ovarian Cancer: Questions for the doctor",
    "imageUrl": "https://www.healthfinder.gov/HealthTopics/glmedia/tools_icons/genetictestingforbreastandovariancancerquestionsforthedoctor.jpg",
    "url": "https://www.healthfinder.gov/HealthTopics/Category/doctor-visits/talking-with-the-doctor/genetic-testing-for-breast-and-ovarian-cancer-questions-for-the-doctor",
    "moreInfoTitle": "For more information about genetic testing for breast and ovarian cancer, check out:",
    "moreInfo": [
      {
        "title": "BRCA Mutations: Cancer Risk and Genetic Testing",
        "url": "https://www.cancer.gov/about-cancer/causes-prevention/genetics/brca-fact-sheet"
      },
      {
        "title": "Hereditary Breast and Ovarian Cancer",
        "url": "https://www.cdc.gov/genomics/disease/breast_ovarian_cancer/index.htm"
      },
      {
        "title": "Genetic Testing for Breast Cancer: Psychological and Social Impact",
        "url": "https://www.mayoclinic.org/diseases-conditions/breast-cancer/in-depth/genetic-testing/art-20047563?p=1"
      }
    ],
    "content": "<p>Genetic counseling and testing can help you understand your risk of some kinds of cancer. Genetic tests can show whether you were born with mutations (changes) in certain genes that increase your risk of cancer.</p><p>If you were born with certain mutations in the<em> </em><em>BRCA1</em> gene or the <em>BRCA2</em> gene, you are at higher risk of developing breast and ovarian cancer. You may also be at higher risk of developing other types of cancers.</p><p><a href='https://healthfinder.gov/HealthTopics/ViewTopic.aspx?topicId=51'>Talk with your doctor about genetic testing</a> to learn about your risk of breast and ovarian cancers if you have:</p><ul><li>A family member who had breast cancer before age 50</li><li>A family member who had cancer in both breasts</li><li>A family member who had both breast and ovarian cancer</li><li>A male family member who had breast cancer</li><li>Two or more family members who had breast cancer</li><li>Eastern European (Ashkenazi) Jewish heritage</li></ul><p>You may also want to ask about genetic testing if you've already had breast or ovarian cancer.</p><p>If genetic tests show that you're at higher risk of developing breast or ovarian cancer– or of getting cancer a second time– you and your doctor can discuss options for managing your risk.</p><p>Genetic counseling can help you understand the testing process and your results. The Affordable Care Act requires most health insurance plans to cover genetic counseling and testing for women at higher risk. Depending on your insurance plan, you may be able to get genetic counseling and testing at no cost to you. Check with your insurance provider.</p><h2>What do I ask the doctor?</h2><p>Visiting the doctor can be stressful. It helps to have questions written down ahead of time. Print these questions and take them with you when you visit the doctor. You may also want to ask a family member or close friend to go with you to take notes.</p><ul><li>What is my risk of developing breast or ovarian cancer?</li><li>Are there warning signs I can look out for?</li><li>Based on my health history and my family history, would you recommend genetic testing to learn more about my risk?</li><li>What are the benefits and risks of genetic testing?</li><li>What are my chances of having a mutated (changed) gene that could increase my risk for cancer?</li><li>What would a positive or negative test result mean for me?</li><li>If I have a mutated gene, what are my options for managing my risk?</li><li>If I have a mutated gene, what would it mean for my children's health?</li><li>If I have a mutated gene, what does that mean for other members of my family?</li><li>If I get geneting testing, who will be able to see my test results?</li><li>Besides mutated genes, what other things increase my risk for breast and ovarian cancer?</li><li>If I decide not to do genetic testing, what types of cancer screening tests are recommended to check for breast and ovarian cancer?</li><li>Is there information I can take with me about genetic testing?</li></ul>",
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Questions for the Doctor", "Cancer", "Breast and Ovarian", "Doctor Visits"],
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-08-28 13:35:40.0Z"
  },
  {
    "itemId": 33,
    "type": "tool",
    "title": "Eat Healthy While Breastfeeding: Quick tips",
    "imageUrl": "https://www.healthfinder.gov/HealthTopics/glmedia/tools_icons/eathealthywhilebreastfeedingquicktips.jpg",
    "url": "https://www.healthfinder.gov/HealthTopics/Category/parenting/nutrition-and-physical-activity/eat-healthy-while-breastfeeding-quick-tips",
    "moreInfoTitle": "For more information on eating healthy while breastfeeding, visit:",
    "moreInfo": [
      {
        "title": "Health & Nutrition Information",
        "url": "https://www.choosemyplate.gov/browse-by-audience/view-all-audiences/adults/moms-pregnancy-breastfeeding"
      },
      {
        "title": "Breastfeeding and everyday life",
        "url": "https://www.womenshealth.gov/breastfeeding/breastfeeding-home-work-and-public/breastfeeding-and-everyday-life"
      }
    ],
    "content": "<p>Breastfeeding has many benefits for moms and babies. For example, breastfeeding can:</p><ul><li>Help protect your baby from infection and illness</li><li>Lower your risk of some diseases like heart disease, type 2 diabetes, ovarian cancer, and breast cancer</li><li>Save your family money</li></ul><p>Making healthy food choices while you're breastfeeding will help you and your baby get the nutrients you both need.</p><p>Most people can get all the nutrients they need by following a healthy eating pattern. If you are worried about getting enough nutrients while breastfeeding, ask your doctor about taking a multivitamin.</p><h2>Follow a healthy eating pattern.</h2><p>To get the nutrients you need while breastfeeding, <a href='https://health.gov/dietaryguidelines/2015/resources/DGA_Healthy-Eating-Pattern.pdf'>follow a healthy eating pattern [PDF - 505 KB]</a>. For example, include these foods in your diet:</p><ul><li>A variety of vegetables and fruits</li><li>Seafood, lean meats and poultry, eggs, beans, peas, unsalted nuts and seeds, and soy products</li><li>Fat-free or low-fat milk, yogurt, and cheese– or soymilk with added calcium and vitamins A and D</li><li>Whole grains like brown rice and 100% whole-wheat bread</li><li>Fortified cereals (cereals with added iron and folic acid)</li></ul><p>Check the Nutrition Facts label and choose foods and drinks with less added sugars, saturated fats, and sodium (salt). <a href='https://healthfinder.gov/healthtopics/category/everyday-healthy-living/nutrition/eat-healthy'>Learn more about eating healthy</a>.</p><h2>Eat 8 to 12 ounces of seafood each week.</h2><p>Fish and shellfish have healthy fats that are good for you and your baby. But some fish is high in mercury, a metal that can hurt your baby's development. It's a good idea to eat seafood that is high in healthy fats but lower in mercury.</p><h3>Best choices</h3><p>These choices are lower in mercury, so you can eat 8 to 12 ounces a week.</p><ul><li>Canned light tuna</li><li>Catfish</li><li>Cod</li><li>Herring</li><li>Oysters</li><li>Salmon</li><li>Shad</li><li>Shrimp</li><li>Tilapia</li><li>Trout</li></ul><h3>Good choices</h3><p>You can eat 4 ounces of these fish a week if you don't eat any other seafood that week.</p><ul><li>Canned or fresh white (albacore) tuna</li><li>Chilean sea bass or striped bass</li><li>Grouper</li><li>Halibut</li><li>Mahi-mahi</li><li>Snapper</li><li>Yellowfin tuna</li></ul><h3>Fish to avoid</h3><p>Don't eat bigeye tuna, king mackerel, marlin, orange roughy, shark, swordfish, or tilefish. They are high in mercury.</p><p><a href='https://www.fda.gov/downloads/Food/ResourcesForYou/Consumers/UCM536323.pdf'>Learn more about choosing fish that is healthy and safe to eat [PDF - 308 KB]</a>.</p><h2>Drink plenty of fluids.</h2><p>Your body needs extra fluids when you are breastfeeding to stay hydrated. Try drinking a glass of water every time you breastfeed.</p><h3>Limit drinks with caffeine and added sugars.</h3><ul><li>Talk to your doctor about how much caffeine is safe for you to drink.</li><li>Limit drinks with added sugars like sodas, sports drinks, and energy drinks.</li></ul><h2>Not drinking alcohol is the safest option for breastfeeding mothers.</h2><p>If you choose to drink alcohol, follow these safety tips.</p><ul><li>Drink only in moderation– for women, this means no more than 1 drink a day. In general, 1 drink is equal to a bottle of beer, a glass of wine, or a shot of liquor. <a href='https://www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/what-standard-drink'>Learn more about what counts as a standard drink</a>.</li><li>If you are going to have a drink, do it just after breastfeeding or pumping, not before.</li><li>Wait at least 2 to 3 hours after having a drink to breastfeed or pump. This gives your body time to break down the alcohol so there will be less alcohol in your breast milk.</li></ul><p>If you have questions, talk to your doctor.</p>",
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-02-21 10:37:17.0Z",
    "tags": ["Babies and Toddlers", "Nutrition and Physical Activity", "Nutrition", "Physical Activity", "Pregnancy", "Obesity", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 34,
    "type": "tool",
    "title": "Gestational Diabetes Screening: Questions for the doctor",
    "imageUrl": "https://www.healthfinder.gov/HealthTopics/glmedia/tools_icons/gestationaldiabetesscreeningquestionsforthedoctor.jpg",
    "url": "https://www.healthfinder.gov/HealthTopics/Category/doctor-visits/talking-with-the-doctor/gestational-diabetes-screening-questions-for-the-doctor",
    "moreInfoTitle": "For more information about gestational diabetes, visit:",
    "moreInfo": [{
      "title": "Gestational Diabetes and Pregnancy",
      "url": "https://www.cdc.gov/pregnancy/diabetes-gestational.html"
    }],
    "content": "<p>Gestational ('jes-TAY-shon-al') diabetes is a type of diabetes that some women develop during pregnancy. When you have diabetes, there's too much sugar (glucose) in your blood.</p><p>If you develop gestational diabetes, it can lead to health problems for you and your baby during and after pregnancy. For example:</p><ul><li>During your pregnancy, your baby is likely to grow bigger than normal. This could make giving birth more difficult– and make it more likely that you'll have a caesarian delivery (C-section).</li><li>Your baby may be at risk for childhood obesity.</li><li>You'll be at risk for developing type 2 diabetes after pregnancy. After your baby is born, you'll need to get tested regularly for type 2 diabetes.</li></ul><p>If you have gestational diabetes, you and your doctor or midwife can work together to protect you and your baby. You can lower your risk for gestational diabetes by eating healthy and staying active before and during your pregnancy.</p><p>Getting tested for gestational diabetes is part of regular prenatal care (health care during pregnancy). Usually, you'll get the test between 24 and 28 weeks of pregnancy.</p><p><strong>What about cost?</strong><br />Under the Affordable Care Act, most health insurance plans must cover testing for gestational diabetes. Depending on your insurance, you may be able to get tested at no cost to you. Check with your insurance company to learn more.</p><h2>What do I ask the doctor?</h2><p>Visiting the doctor can be stressful. It helps to have questions written down before your appointment. You may also want to ask a family member or close friend to go with you to take notes.</p><p>Print this list of questions, and take it with you the next time you visit your doctor or midwife.</p><ul><li>What puts me at risk for gestational diabetes?</li><li>What can I do to lower my risk?</li><li>How will you test me for gestational diabetes?</li><li>How could gestational diabetes affect my baby's health?</li><li>How could gestational diabetes affect my health?</li><li>If I have gestational diabetes, what happens next?</li></ul>",
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-06-25 16:23:07.0Z",
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Nutrition", "Pregnancy", "Diabetes", "Questions for the Doctor", "Doctor Visits"]
  },
  {
    "itemId": 35,
    "title": "Oral Health for Older Adults: Quick tips",
    "imageUrl": "https://www.healthfinder.gov/HealthTopics/glmedia/tools_icons/98666_OralHealth.jpg",
    "url": "https://www.healthfinder.gov/HealthTopics/Category/doctor-visits/regular-check-ups/oral-health-for-older-adults-quick-tips",
    "moreInfoTitle": "For more information about keeping your mouth healthy as you get older, check out:",
    "moreInfo": [
      {
        "title": "Taking Care of Your Teeth and Mouth",
        "url": "https://www.nia.nih.gov/health/taking-care-your-teeth-and-mouth"
      },
      {
        "title": "Dental Health Info for Older Adults",
        "url": "https://www.nidcr.nih.gov/health-info/for-older-adults"
      }
    ],
    "content": "<p>Taking care of your teeth and gums as you get older can prevent problems like toothaches, tooth decay (cavities), and tooth loss. A healthy mouth also makes it easier for you to eat well and enjoy food.</p><p>It's especially important to take care of your teeth and gums if you have a health condition like diabetes or heart disease– or if you're taking medicines that can cause oral health problems.</p><p>Follow the steps below to keep your teeth and gums healthy as you get older.</p><h2>Brush and floss your teeth every day.</h2><p>Brushing and flossing helps deleteMany dental plaque, a sticky film of bacteria (germs). If plaque builds up on your teeth, it can cause tooth decay or gum disease.</p><ul><li>Brush your teeth with fluoride toothpaste twice a day. Brush after breakfast and before bed.</li><li>Floss between your teeth every day. If you have trouble flossing, ask your dentist about using a special brush or pick instead.</li></ul><h2>Watch for changes in your mouth.</h2><p>Your risk of getting oral cancer increases as you get older. If you see any changes in your mouth, it's important to get them checked out.</p><p>See a doctor or dentist if you have any of these symptoms for more than 2 weeks:</p><ul><li>A spot in your mouth, lip, or throat that feels uncomfortable or sore</li><li>A lump or thick area in your mouth, lip, or throat</li><li>A white or red patch in your mouth</li><li>Difficulty chewing, swallowing, or moving your jaw or tongue</li><li>Numbness in your tongue or mouth</li><li>Swelling in your jaw</li><li>Pain in one ear without hearing loss</li></ul><h2>See your dentist regularly for a checkup and cleaning.</h2><p>There's no single rule for how often people need to see the dentist– it varies from person to person. The next time you get a checkup and cleaning, ask your dentist how often you need to come in.</p><p>Keep in mind that Medicare doesn't pay for routine dental care. You may want to get private dental insurance. <a href='https://www.hhs.gov/answers/health-care/where-can-i-find-low-cost-dental-care/index.html'>Get help finding low-cost dental care</a>.</p><h2>Talk to your doctor about dry mouth.</h2><p>Dry mouth means not having enough saliva (spit) to keep your mouth wet. Dry mouth can make it hard to eat, swallow, or talk. It can also lead to tooth decay or infection.</p><p>Dry mouth is a side effect of some medicines. It can also happen if you have certain health problems (like diabetes) or if you're getting chemotherapy or radiation (treatments for cancer).</p><p>If you have dry mouth, talk with your doctor or dentist and ask what you can do.</p><h2>Practice healthy habits.</h2><ul><li>Eat healthy and cut down on sugary foods and drinks. This can help prevent tooth decay– and it's good for your overall health.</li><li>Don't smoke or use other tobacco products. Smoking cigarettes, chewing tobacco, or using snuff puts you at higher risk for oral cancer. Smoking also increases your risk for gum disease.</li><li>If you smoke, call 1-800-QUIT-NOW (1-800-784-8669) for free help quitting.</li><li>If you drink alcohol, drink only in moderation. This means no more than 1 drink a day for women or 2 drinks a day for men. Heavy drinking increases your risk of oral cancer.</li></ul>",
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-06-27 14:33:32.0Z",
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Questions for the Doctor", "Older Adults", "Oral Health", "Doctor Visits"]
  },
  {
    "itemId": 36,
    "title": "Preventing Preeclampsia: Questions for the doctor",
    "imageUrl": "https://www.healthfinder.gov/HealthTopics/glmedia/tools_icons/99089_PreeclampsiaQuestions.jpg",
    "url": "https://www.healthfinder.gov/HealthTopics/Category/doctor-visits/talking-with-the-doctor/preventing-preeclampsia-questions-for-the-doctor",
    "moreInfoTitle": "To learn more about preeclampsia, visit:",
    "moreInfo": [
      {
        "title": "Preeclampsia",
        "url": "http://www.nlm.nih.gov/medlineplus/ency/article/000898.htm"
      },
      {
        "title": "FAQs",
        "url": "http://www.preeclampsia.org/health-information/faqs"
      }
    ],
    "content": "<p>If you are pregnant or planning to get pregnant, ask your doctor or midwife about your risk for preeclampsia ('pree-ih-KLAMP-see-uh'), also called toxemia. If you are at high risk, the doctor may recommend that you take a low dose (small amount) of aspirin while you are pregnant to help prevent preeclampsia.</p><p>Preeclampsia is a health problem that some women develop after about 20 weeks of pregnancy. Preeclampsia is usually mild, but it can be dangerous and even deadly for both a pregnant woman and her unborn baby. </p><p>Many women who have preeclampsia don't feel sick. The main sign of preeclampsia is high blood pressure. It's important to get regular checkups during pregnancy so your doctor or midwife can check your blood pressure.</p><p></p><h3>Am I at high risk for preeclampsia? </h3><p>Most pregnant women are not at high risk for preeclampsia.</p><p>You are at higher risk for preeclampsia if you: </p><ul><li>Had preeclampsia in a previous pregnancy</li><li>Are pregnant with more than one baby</li><li>Have chronic (long-term) high blood pressure</li><li>Have type 1 or type 2 diabetes, kidney disease, or certain autoimmune diseases</li></ul><p>You may also be at risk if you:</p><ul><li>Are pregnant for the first time</li><li>Are obese</li><li>Have a family history of preeclampsia</li><li>Are African American</li><li>Are age 35 or older</li></ul><h2>What do I ask the doctor?</h2><p>Visiting the doctor can be stressful. It helps to have questions written down before your appointment. Print this list of questions and take it with you the next time you visit your doctor or midwife.</p><ul><li>What are my blood pressure numbers– and are they normal?</li><li>Am I at high risk for developing preeclampsia?</li><li>If I develop preeclampsia, how could it affect me and my baby?</li><li>Do you recommend that I take low-dose aspirin to help prevent preeclampsia?</li><li>What are the risks and benefits (for me and my baby) if I take aspirin to prevent preeclampsia?</li><li>What else can I do to have a healthy pregnancy?</li></ul>",
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-09-19 12:04:04.0Z",
    "tags": ["Women", "Health Conditions and Diseases", "Screening Tests", "Preeclampsia", "Questions for the Doctor", "Doctor and Midwife Visits", "Doctor Visits"]
  },
  {
    "itemId": 37,
    "title": "Testing for Syphilis: Questions for the doctor",
    "imageUrl": "https://www.healthfinder.gov/HealthTopics/glmedia/tools_icons/46165_hf_315_topic_Syphilis.jpg",
    "url": "https://www.healthfinder.gov/HealthTopics/Category/health-conditions-and-diseases/hiv-and-other-stds/syphilis-testing-questions-for-the-doctor",
    "moreInfoTitle": "For more information about syphilis, check out:",
    "moreInfo": [
      {
        "title": "Syphilis",
        "url": "https://www.cdc.gov/std/syphilis/stdfact-syphilis.htm"
      },
      {
        "title": "Congenital Syphilis",
        "url": "https://www.cdc.gov/std/syphilis/stdfact-congenital-syphilis.htm"
      },
      {
        "title": "Syphilis and Men Who Have Sex with Men",
        "url": "https://www.cdc.gov/std/syphilis/stdfact-msm-syphilis.htm"
      }
    ],
    "content": "<p>Syphilis (SIF-ih-lis) is an STD (sexually transmitted disease) that you can get during vaginal, anal, or oral sex. If you're pregnant and have syphilis, you can pass it to your baby.</p><p>Get tested for syphilis if you:</p><ul><li>Are pregnant</li><li>Are a man who has sex with men</li><li>Are living with HIV (also called being HIV-positive)</li></ul><p>Some people who get syphilis don't notice any symptoms. The only way to know if you have syphilis is to get tested.</p><p>If it's not treated, syphilis can lead to serious health problems and even death. Medicine can cure syphilis, but it can't undo any damage that syphilis has already caused. That's why it's important to get tested regularly if you're at risk.</p><h3>What if I've had syphilis before?</h3><p>Being treated for syphilis once doesn't protect you from getting it again. It's possible to get syphilis again after you've been cured, so ask your doctor if you need to be retested.</p><h3>What about cost?</h3><p>Under the Affordable Care Act, health insurance plans must cover syphilis testing for adults at higher risk for syphilis and all pregnant women. That means you may be able to get tested at no cost to you. Talk to your insurance company to find out more.</p><p>For more information about other services covered by the Affordable Care Act, visit <a href='https://www.healthcare.gov/coverage/preventive-care-benefits/'>HealthCare.gov</a>.</p><h2>What do I ask the doctor?</h2><p>Visiting the doctor can be stressful. It helps to have questions for the doctor or nurse written down ahead of time. You may also want to ask a family or friend to go with you to take notes. </p><p>Print this list of questions and take it with you to your appointment.</p><ul><li>Am I at risk for syphilis?</li><li>Do I need to get tested for syphilis?</li><li>How often do you recommend I get tested for syphilis?</li><li>What happens during the test?</li><li>How will I find out my test results?</li><li>When will I get my test results?</li><li>If I have syphilis, what will happen next?</li><li>Can you give me some information about syphilis to take home with me?</li></ul>",
    "createdAt": new Date(Date.now()),
    "updatedAt": "2019-06-28 12:09:29.0Z",
    "tags": ["Women", "Screening Tests", "Sexual Health", "HIV and Other STDs", "Questions for the Doctor", "Doctor Visits"]
  }
];

// // Create Category collection and seed categories data
// db.Category
//   .deleteMany({})
//   .then(() => db.Category.collection.insertMany(categorySeed))
//   .then(data => {
//     console.log(data.result.n + " categories inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// // Create Tag collection and seed tags data
// db.Tag
//   .deleteMany({})
//   .then(() => db.Tag.collection.insertMany(tagSeed))
//   .then(data => {
//     console.log(data.result.n + " tags inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// Create Article collection and seed articles data
db.Article
  .deleteMany({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " articles inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
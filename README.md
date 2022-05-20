# North Korea COVID-19 Tracking Project

This a repository for data related to COVID-19 in the Democratic People's Republic of Korea.

Our main source is [NK News](https://www.nknews.org/pro/coronavirus-in-north-korea-tracker/), who collect data from WHO South-East Asia Region [situation reports](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports) and directly from the [Korean Central News Agency](http://www.kcna.kp/kp).

**Tests**. 

The daily and cumulative number of tests is available in '[tests.csv](https://github.com/camappel/dprk-covid/blob/master/tests.csv)'.

According to a WHO [report](https://cdn.who.int/media/docs/default-source/searo/whe/coronavirus19/sear-weekly-reports/searo-weekly-situation-report-35-2021.pdf?sfvrsn=6126c5b_5) from 2021-09-10, patients are 'tested with reverse transcription polymerase chain reaction (RT-PCR)
at an interval of 10 days'. COVID-19 tests have been performed within the country since 2020-04-07.

The estimated daily number of tests is calculated by dividing the change in samples/people tested by the number of days since the last report. Based on this calculation, testing capacity within the country appears to be about 100 people per day.


**Suspected cases**.

The daily and cumulative number of suspected cases is available in '[suspected_cases_deaths.csv](https://github.com/camappel/dprk-covid/blob/master/suspected_cases.csv)'.

The KCNA reports the cumulative and daily change in the number of cases of 'fever', as well recoveries. The number of isolated patients is calculated based on these figures.


**Deaths**.

The daily and cumulative number of deaths is available in '[suspected_cases_deaths.csv](https://github.com/camappel/dprk-covid/blob/master/suspected_cases.csv)'.


## How to contribute
We will need:
- Scripts to scrape data
- Scripts to visualise the data on a dashboard
- Crontabs to schedule updates
- New sources of data
- Quality control of exisiting data

We hope that a domain and server for the dashboard will be provided by the Korea Health Policy Project at Harvard Medical School.

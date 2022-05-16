# North Korea COVID-19 Tracking Project

This a repository for data related to COVID-19 in the Democratic People's Republic of Korea.

Our main source is [NK News](https://www.nknews.org/pro/coronavirus-in-north-korea-tracker/), who collect data from WHO South-East Asia Region [situation reports](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports) and directly from the [Korean Central News Agency](http://www.kcna.kp/kp).

**Tests**
The WHO reports the number of samples and people tested by PCR in North Korea. According to a [report](https://cdn.who.int/media/docs/default-source/searo/whe/coronavirus19/sear-weekly-reports/searo-weekly-situation-report-35-2021.pdf?sfvrsn=6126c5b_5) from 2021-09-10, patients are 'tested with reverse transcription polymerase chain reaction (RT-PCR)
at an interval of 10 days'. COVID-19 tests have been performed within the country since 2020-04-07.

The estimated daily number of tests is calculated by dividing the change in samples tested reported by NK News by the number of days. Based on this calculation, testing capacity within the country appears to be about 100 people per day.

**Suspected cases**
The KCNA reports the cumulative and daily change in the number of cases of 'fever', as well recoveries and deaths. The number of isolated patients is calculated based on these figures.

**Confirmed cases**

### How to contribute
- Scripts to scrape data
- A dashboard to visualise the data
- New sources of data
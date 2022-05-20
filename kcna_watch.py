from datetime import datetime
from bs4 import BeautifulSoup
import requests
import re
import pandas as pd


class KCNA:
    url = "https://kcnawatch.org/article/156/"
    regex = {
        "title": r"(results)|(treatment)",
        "date": r"(\d+\/\d+\/\d+)",
        "cumulative_probable": r"persons with fever is over ([0-9 ]+)",
        "cumulative_recovery": r"([0-9 ]+) have recovered",
        "cumulative_isolated": r"([0-9 ]+) are under medical treatment",
        "new_probable": r"([0-9 ]+) persons with fever",
        "new_recovery": r"([0-9 ]+) recoveries",
        "new_death": r"([0-9 ]+) death",
    }

    def read(self) -> pd.DataFrame:
        r = requests.get(self.url)
        soup = BeautifulSoup(r.content, "html.parser")
        link = self._get_element(soup)
        text = self._get_text(link)
        data = self._parse_data(text)
        df = pd.DataFrame(data, index=[0])
        df["Source URL"] = link
        return df

    def _get_element(self, soup):
        for h4 in soup.find_all("h4"):
            if "Treatment" in h4.text:
                link = h4.find("a").get("href")
        return link

    def _get_text(self, link):
        n = requests.get(link)
        soup = BeautifulSoup(n.content, "html.parser")
        text = soup.text
        return text

    def _parse_data(self, text) -> pd.DataFrame:
        date = datetime.strptime(
            re.search(self.regex["date"], text).group(1), "%d/%m/%Y"
        )
        cumulative_probable = int(
            re.search(self.regex["cumulative_probable"], text).group(1).replace(" ", "")
        )
        new_probable = int(
            re.search(r"([0-9 ]+) persons with fever", text).group(1).replace(" ", "")
        )
        cumulative_recovery = int(
            re.search(self.regex["cumulative_recovery"], text).group(1).replace(" ", "")
        )
        new_recovery = int(
            re.search(self.regex["new_recovery"], text).group(1).replace(" ", "")
        )
        cumulative_isolated = int(
            re.search(self.regex["cumulative_isolated"], text).group(1).replace(" ", "")
        )
        new_death = int(
            re.search(self.regex["new_death"], text).group(1).replace(" ", "")
        )
        record = {
            "Date": date,
            "Cumulative probable cases": cumulative_probable,
            "New probable cases": new_probable,
            "Cumulative recovered": cumulative_recovery,
            "New recovered": new_recovery,
            "Cumulative isolated": cumulative_isolated,
            "New deaths": new_death,
        }
        return record

    def export(self):
        data = self.read()
        data.to_csv("scrape.csv", index=False)


def main():
    KCNA().export()


main()

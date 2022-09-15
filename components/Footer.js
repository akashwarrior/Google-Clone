import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>India</p>
      </div>

      <div className="text-sm flex sm:flex-row p-3 sm:p-4 flex-col items-center sm:justify-evenly lg:justify-between">
        <div className="flex space-x-8 mb-5 sm:px-5 sm:mb-0">
          <p
            onClick={() =>
              (location.href =
                "https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1")
            }
          >
            About
          </p>
          <p
            onClick={() =>
              (location.href =
                "https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1")
            }
          >
            Advertising
          </p>
          <p
            onClick={() =>
              (location.href =
                "https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1")
            }
          >
            Business
          </p>
          <p
            onClick={() =>
              (location.href = "https://google.com/search/howsearchworks/?fg=1")
            }
          >
            How Search Works
          </p>
        </div>
        <div className="flex space-x-8 sm:px-5">
          <p
            onClick={() =>
              (location.href =
                "https://policies.google.com/privacy?hl=en-IN&fg=1")
            }
          >
            Privacy
          </p>
          <p
            onClick={() =>
              (location.href =
                "https://policies.google.com/terms?hl=en-IN&fg=1")
            }
          >
            Terms
          </p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import QRCode from "react-qr-code";
import Modal from "../../../components/modal";
import { AppleStore, PlayStore } from "../../../assets";
import appName from "../../../constants/data/App_Name";
import Image from "next/image";
import Link from "next/link";

interface DownloadAppModalType {
  isModalOpen: boolean;
  closeModal: any;
}

const DownloadAppModal = ({
  isModalOpen,
  closeModal,
}: DownloadAppModalType) => {
  const website_url = process.env.NEXT_PUBLIC_WEBSITE_BASE_URL;

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      modalContentStyle={"gap-[50px] px-[80px] py-[40px]"}
    >
      <div className="flex flex-col justify-center items-center gap-[24px]">
        <h2 className="text-blackb font-[500] text-[4.375rem] text-center leading-[73.6px]">
          Get the {appName} App
        </h2>
        <p className="text-[#667085] text-center text-[1.375rem]">
          Scan the QR code to download the app
        </p>
      </div>

      <div className="flex justify-center items-center">
        <QRCode
          value={`${website_url}/mobile_download`}
          className="xl:w-[200px] w-[160] xl:h-[200px] lg:block"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-[24px]">
        <p className="text-[#667085] text-center leading-[20px] text-[1.375rem]">
          or download from Apple store or the Google Play Store
        </p>

        <div className="flex lg:flex-row items-center lg:w-full justify-center">
          <Link href={``} target="_blank">
            <Image
              src={AppleStore}
              alt="download image"
              width={175}
              height={50}
              className="w-[175px] h-[50px]"
            />
          </Link>

          <Link
            href={``}
            target="_blank"
            className=""
          >
            <Image
              src={PlayStore}
              alt="download image"
              width={118}
              height={35}
              className="w-[175px] h-[50px]"
            />
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default DownloadAppModal;

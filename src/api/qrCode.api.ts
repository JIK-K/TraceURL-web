import { getData } from "@/utils/axios/serverHelper";
const baseUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/qr-code`;

export const downloadQrCode = (fileName: string) => {
  const url = `${baseUrl}/download/${fileName}`;

  return getData<Blob>(url, {
    responseType: "blob",
  });
};

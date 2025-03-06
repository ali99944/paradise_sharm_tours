import { cloudinary } from "./cloudinary.config";

export const uploadToCloudinary = async (file: File) => {
  try {
    const fileBuffer = await file.arrayBuffer();
    return new Promise<string>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "image",
          folder: "paradise_sharm_tours",
        },
        (error, result) => {
          if (error) {
            console.error(error);
            return reject(error);
          }
          if (result) {
            console.log(result);
            return resolve(result.secure_url);
          }
          reject(new Error("Failed to upload to Cloudinary"));
        }
      );
      uploadStream.end(Buffer.from(fileBuffer));
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};


import { useCreateAsset } from "@livepeer/react";


const useUpload = () => {
    const {
        mutate:createAsset,
        data: asset,
        uploadProgress,
        status,
        error,
      } = useCreateAsset();

      const uploadVideo = async () => {
        // Calling the createAsset function from the useCreateAsset hook to upload the video
        createAsset({
          name: title,
          file: video,
        });
      };
  return (
    <div>useUpload</div>
  )
}

export default useUpload
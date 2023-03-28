import Image from "next/image";

function Video() {
  return (
    <div className="cursor-pointer">
      <div className="flex ">
        <div>
          <div className="">
            <Image
              src="/../public/assets/yt-thumb.webp"
              width={300}
              height={80}
              className="rounded-lg"
            />
          </div>

          <div className="flex gap-5  items-start   mt-3">
            <div>
              <div className="bg-red-700 rounded-full w-10 h-10 font-semibold"></div>
            </div>
            <div>
              Intraday live trade || <br /> Advance candle talk
              <div className="flex justify-start">
                <div className="text-gray-500">Trading Channel</div>
              </div>
              <div className="text-gray-500 flex gap-2">
                <div>8.4k views</div>
                <div>2 months ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;

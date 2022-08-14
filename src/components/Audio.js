import React, { useRef,useMemo} from "react";
function Audios({data}) {
  const refAudio = useRef(null);
  if (refAudio.current) {
    refAudio.current.pause();
    refAudio.current.load();
  }
const url = useMemo(()=>data,[data])

  return (
    <div className="aduio w-100">
      <div className="cover d-flex justify-content-center py-2">
        <audio controls autoPlay ref={refAudio}>
          <source src={url} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Audios;

"use client";

import React, { useState } from "react";
import NextImage from "next/image";
import Image from "next/image";

const Share = () => {
    const [media, setMedia] = useState<File | null>(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [settings, setSettings] = useState<{
        type: "original" | "wide" | "square";
        sensitive: boolean;
    }>({
        type: "original",
        sensitive: false,
    });

    const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setMedia(e.target.files[0]);
        }
    };

    const previewURL = media ? URL.createObjectURL(media) : null;

    return (
        <div
            className="p-4 flex gap-4"
        >
            {/* AVATAR */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src="/general/avatar.png" alt="" width={100} height={100} />
            </div>
            {/* OTHERS */}
            <div className="flex-1 flex flex-col gap-4">
                <input
                    type="text"
                    name="desc"
                    placeholder="What is happening?!"
                    className="bg-transparent outline-none placeholder:text-textGray text-xl"
                />
                {/* PREVIEW IMAGE */}
                {media?.type.includes("image") && previewURL && (
                    <div className="relative rounded-xl overflow-hidden">
                        <NextImage
                            src={previewURL}
                            alt="Preview Image"
                            width={600}
                            height={600}
                            className={`w-full ${settings.type === "original"
                                ? "h-full object-contain"
                                : settings.type === "square"
                                    ? "aspect-square object-cover"
                                    : "aspect-video object-cover"
                                }`}
                        />
                        <div
                            className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
                            onClick={() => setIsEditorOpen(true)}
                        >
                            Edit
                        </div>
                        <div
                            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
                            onClick={() => setMedia(null)}
                        >
                            X
                        </div>
                    </div>
                )}
                {media?.type.includes("video") && previewURL && (
                    <div className="relative">
                        <video src={previewURL} controls />
                        <div
                            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
                            onClick={() => setMedia(null)}
                        >
                            X
                        </div>
                    </div>
                )}
                {isEditorOpen && previewURL && (
                    <div></div>
                )}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex gap-4 flex-wrap">
                        <input
                            type="file"
                            name="file"
                            onChange={handleMediaChange}
                            className="hidden"
                            id="file"
                            accept="image/*,video/*"
                        />
                        <label htmlFor="file">
                            <Image
                                src="/icons/image.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </label>
                        <Image
                            src="/icons/gif.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <Image
                            src="/icons/poll.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <Image
                            src="/icons/emoji.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <Image
                            src="/icons/schedule.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <Image
                            src="/icons/location.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                    </div>
                    <button className="bg-white text-black font-bold rounded-full py-2 px-4">
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Share;

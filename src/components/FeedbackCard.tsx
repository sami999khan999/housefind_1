import Image from "next/image";
import React from "react";

const FeedbackCard = ({
  name,
  feedback,
}: {
  name: string;
  feedback: string;
}) => {
  return (
    <div className="flex flex-col 640p:flex-row justify-between 640p:gap-10 w-full">
      {/* Feedback Image (Hidden on Mobile) */}
      <div>
        <Image
          src={"/feedback.png"}
          width={600}
          height={562}
          alt="Feedback"
          className="hidden 640p:block"
        />
      </div>

      {/* Feedback Content */}
      <div className="bg-background rounded-2xl p-6 640p:p-10 w-full 640p:w-[60%] text-primary-foreground border space-y-4 640p:space-y-6">
        {/* Logo */}
        <Image
          src={"/feedback-logo.png"}
          width={48}
          height={48}
          alt="logo"
          className="w-12 h-12 640p:w-16 640p:h-16"
        />

        {/* Feedback Text */}
        <p className="text-[18px] 640p:text-[24px] line-clamp-3">
          {`"${feedback}"`}
        </p>

        {/* Profile & Google Logo */}
        <div className="flex justify-between items-center mt-auto">
          {/* Profile Section */}
          <div className="flex items-center gap-3 640p:gap-4">
            <Image
              src={"/customer-profile.png"}
              width={64}
              height={64}
              alt="profile"
              className="w-12 h-12 640p:w-20 640p:h-20"
            />
            <div>
              <h3 className="text-lg 640p:text-2xl font-semibold">{name}</h3>
              <p className="text-sm 640p:text-base">Happy Client</p>
            </div>
          </div>

          {/* Google Logo */}
          <Image
            src={"/google.png"}
            width={100}
            height={50}
            alt="google"
            className="w-20 h-auto 640p:w-[122px] 640p:h-[60px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

import React from "react";

export interface ImageProps {
    /**
     * Đường dẫn đến hình ảnh.
     */
    src: NonEmptyString;
  
    /**
     * Văn bản thay thế mô tả nội dung hình ảnh. (Bắt buộc)
     */
    alt: NonEmptyString;
  
    /**
     * Chú thích cho hình ảnh. (Tùy chọn)
     */
    caption?: string;
  
    /**
     * Chiều rộng của hình ảnh. (Tùy chọn)
     */
    width?: number | string;
  
    /**
     * Chiều cao của hình ảnh. (Tùy chọn)
     */
    height?: number | string;
  
    /**
     * Thuộc tính aria-label cung cấp thêm thông tin về hình ảnh cho người dùng sử dụng trình đọc màn hình. (Tùy chọn)
     */
    ariaLabel?: string;
  
    /**
     * Xác định xem hình ảnh có phải là hình ảnh trang trí hay không. (Tùy chọn)
     */
    decorative?: boolean;
}

type NonEmptyString = string & { _brand: "NonEmptyString" };

function createNonEmptyString(value: string): NonEmptyString {
  if (value === "") {
    throw new Error("Value cannot be empty");
  }
  return value as NonEmptyString;
}

export const A11yImage = React.forwardRef<HTMLButtonElement, ImageProps>(
  ({src, alt, width, height, ariaLabel, decorative, caption, ...props}, ref)=>{

  return (
    <figure  ref={ref} >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        aria-label={ariaLabel}
        aria-hidden={decorative ? "true" : undefined}
        {...props} 
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
})

  

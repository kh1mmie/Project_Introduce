import React, { useState, useEffect } from "react";

// [ADD] เพิ่ม props: start (ค่าเดิม true) และ onComplete
const Typewriter = ({ text, speed = 100, delay = 0, start = true, onComplete }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    // [LOGIC 1] ถ้ายังไม่ให้เริ่ม (start = false) ก็ไม่ต้องทำอะไรเลย
    if (!start) return;

    // ถ้ายังพิมพ์ไม่ครบ
    if (currentIndex < text.length) {
        const timeToWait = currentIndex === 0 ? delay : speed;
        const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        }, timeToWait);

        return () => clearTimeout(timeout);
    }
    // [LOGIC 2] ถ้าพิมพ์ครบแล้ว (currentIndex == text.length)
    else {
      // ถ้ามีฟังก์ชัน onComplete ส่งมา ให้เรียกใช้เพื่อบอกว่า "เสร็จแล้วจ้า"
        if (onComplete) {
        onComplete();
        }
    }
  }, [currentIndex, speed, text, start, onComplete, delay]); // เพิ่ม start, onComplete ใน dependency

    return (
        <span>
            {currentText}
        {/* ซ่อน Cursor ถ้ายังไม่เริ่มพิมพ์ หรือ พิมพ์เสร็จแล้ว (Optional) */}
        <span
            className={`cursor-blink h-[0.8em] align-middle ${
            start && currentIndex < text.length ? "inline-block" : "hidden"
        }`}
        ></span>
    </span>
    );
};

export default Typewriter;

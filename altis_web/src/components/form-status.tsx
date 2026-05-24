"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, AlertCircle } from "lucide-react";

function BookTrialStatusInner() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get("success") === "1";
  const isError = searchParams.get("error") === "1";

  if (isSuccess) {
    return (
      <div className="mt-6 rounded-lg border border-crimson bg-surface p-5 text-center">
        <CheckCircle className="h-8 w-8 text-crimson mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-ivory">تم إرسال طلبك بنجاح!</h3>
        <p className="mt-2 text-sm text-steel leading-relaxed">
          سنتواصل معك خلال 24 ساعة لتأكيد موعد التجربة. تحقق من هاتفك وبريدك الإلكتروني.
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-6 rounded-lg border border-border bg-surface p-5 text-center">
        <AlertCircle className="h-8 w-8 text-crimson mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-ivory">حدث خطأ</h3>
        <p className="mt-2 text-sm text-steel leading-relaxed">
          لم نتمكن من إرسال طلبك. حاول مرة أخرى أو تواصل معنا مباشرة عبر واتساب.
        </p>
      </div>
    );
  }

  return null;
}

export function BookTrialStatus() {
  return (
    <Suspense fallback={null}>
      <BookTrialStatusInner />
    </Suspense>
  );
}

function ContactStatusInner() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get("success") === "1";
  const isError = searchParams.get("error") === "1";

  if (isSuccess) {
    return (
      <div className="mt-6 rounded-lg border border-crimson bg-surface p-5 text-center">
        <CheckCircle className="h-8 w-8 text-crimson mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-ivory">تم إرسال رسالتك بنجاح!</h3>
        <p className="mt-2 text-sm text-steel leading-relaxed">
          سنتواصل معك في أقرب وقت. شكراً لاهتمامك.
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-6 rounded-lg border border-border bg-surface p-5 text-center">
        <AlertCircle className="h-8 w-8 text-crimson mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-ivory">حدث خطأ</h3>
        <p className="mt-2 text-sm text-steel leading-relaxed">
          لم نتمكن من إرسال رسالتك. حاول مرة أخرى أو راسلنا على واتساب.
        </p>
      </div>
    );
  }

  return null;
}

export function ContactStatus() {
  return (
    <Suspense fallback={null}>
      <ContactStatusInner />
    </Suspense>
  );
}

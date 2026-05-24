# Database Schema أولية
## Altis Digital Coaching MVP

## 1. الهدف من هذه الوثيقة

هذه الوثيقة تحدد **الهيكل الأولي لقاعدة البيانات** الخاصة بـ MVP المتابعة الرقمية لـ Altis.

تم بناؤها اعتمادًا على:

- وثيقة `PRD MVP Digital Coaching - Altis`
- وثيقة `Screens Map + User Flows - Altis`
- منطق الـ MVP الذي يركز على:
  - خطة أسبوعية
  - نصائح يومية
  - Check-in أسبوعي
  - تقدم أساسي
  - متابعة المدرب
  - مراقبة الحالات المعرضة للخطر

الهدف من هذا الـ Schema ليس بناء نظام ضخم، بل بناء **قاعدة بيانات نظيفة، قابلة للتوسع، ومناسبة للـ MVP** دون تعقيد زائد.

---

## 2. مبادئ تصميم الـ Schema

### 1. توحيد المستخدمين في جدول واحد
بدل إنشاء جدول منفصل لكل من `member` و`coach` و`admin`، الأفضل في النسخة الأولى هو استخدام جدول موحد للمستخدمين مع حقل دور واضح.

### 2. فصل البيانات الثابتة عن البيانات التشغيلية
- بيانات الشخص الأساسية تبقى في `users`
- البيانات المرتبطة بعضوية أو برنامج أو متابعة أسبوعية تبقى في جداول منفصلة

### 3. تصميم يدعم التوسع لاحقًا
الـ MVP يجب أن يبقى بسيطًا، لكن دون قرارات معمارية تصعّب لاحقًا:

- إضافة عدة برامج
- تخصيص أعلى
- تطبيق موبايل
- تحليلات أفضل
- أتمتة التنبيهات

### 4. تجنب الحقول المكررة غير الضرورية
كل معلومة ينبغي أن يكون لها مصدر واحد واضح قدر الإمكان.

### 5. دعم القراءة التشغيلية السريعة
يجب أن تسهّل البنية استخراج:

- العضو النشط
- العضو منخفض الالتزام
- آخر Check-in
- الخطة الحالية
- عدد الحصص
- وجود مهمة متابعة

---

## 3. الافتراض التقني المقترح

أفضل خيار منطقي للتنفيذ لاحقًا هو قاعدة بيانات من نوع:

- **PostgreSQL**

ويُفضَّل أن تكون قابلة للتطبيق بسهولة على:

- **Supabase**

لكن هذه الوثيقة مكتوبة بشكل **منطقي محايد**، بحيث يمكن تحويلها أيضًا إلى أي backend آخر.

---

## 4. Naming Conventions

### التسمية المقترحة
- أسماء الجداول: `snake_case`
- أسماء الأعمدة: `snake_case`
- المفاتيح الأساسية: `id`
- المفاتيح الخارجية: `<entity>_id`
- الطوابع الزمنية:
  - `created_at`
  - `updated_at`

### أمثلة
- `weekly_plans`
- `weekly_checkins`
- `follow_up_tasks`
- `assigned_coach_id`

---

## 5. الكيانات الأساسية في الـ MVP

الكيانات الرئيسية المقترحة:

- `users`
- `programs`
- `member_enrollments`
- `weekly_plans`
- `weekly_plan_assignments`
- `daily_tips`
- `daily_tip_reads`
- `attendance_logs`
- `weekly_checkins`
- `coach_notes`
- `follow_up_tasks`
- `notifications`

هذه المجموعة تكفي لتغطية معظم احتياجات الـ MVP دون تضخم.

---

## 6. الجداول الأساسية

## 6.1 جدول المستخدمين `users`

### الهدف
تخزين جميع مستخدمي النظام في جدول واحد:

- الأعضاء
- المدربون
- الإدارة

### الحقول المقترحة
| الحقل | النوع المقترح | مطلوب | ملاحظات |
|------|---------------|--------|---------|
| `id` | uuid | نعم | المفتاح الأساسي |
| `auth_user_id` | uuid | لا | مرجع لنظام المصادقة الخارجي إن وُجد |
| `role` | enum / text | نعم | `member`, `coach`, `admin` |
| `full_name` | text | نعم | الاسم الكامل |
| `phone` | text | لا | يفضّل فريد عند الاعتماد عليه في الدخول |
| `email` | text | لا | يمكن أن يكون فريدًا إن استُخدم للدخول |
| `avatar_url` | text | لا | اختياري |
| `is_active` | boolean | نعم | افتراضيًا `true` |
| `last_login_at` | timestamptz | لا | مهم لمؤشرات النشاط |
| `created_at` | timestamptz | نعم | |
| `updated_at` | timestamptz | نعم | |

### ملاحظات
- إذا تم اعتماد نظام Auth خارجي، يكون `auth_user_id` هو الرابط بين طبقة المصادقة وبيانات التطبيق.
- إذا لم يوجد Auth خارجي في البداية، يمكن الاكتفاء بـ `id` الداخلي.

### قيود مقترحة
- `unique(auth_user_id)` إن تم استخدامه
- `unique(phone)` عند الاعتماد على الهاتف
- `unique(email)` عند الاعتماد على البريد

---

## 6.2 جدول البرامج `programs`

### الهدف
تعريف البرامج أو المسارات التدريبية الأساسية.

### أمثلة
- Boxing
- Fitness
- Cardio
- Private Coaching

### الحقول المقترحة
| الحقل | النوع | مطلوب | ملاحظات |
|------|------|--------|---------|
| `id` | uuid | نعم | المفتاح الأساسي |
| `name` | text | نعم | اسم البرنامج |
| `slug` | text | نعم | قيمة ثابتة للاستخدام البرمجي |
| `description` | text | لا | وصف مختصر |
| `is_active` | boolean | نعم | افتراضيًا `true` |
| `created_at` | timestamptz | نعم | |
| `updated_at` | timestamptz | نعم | |

### قيود مقترحة
- `unique(slug)`

---

## 6.3 جدول انتساب/عضوية الأعضاء `member_enrollments`

### الهدف
ربط العضو ببرنامج معين، وتخزين حالته الحالية داخل التجربة.

### لماذا هذا الجدول مهم؟
لأنه يفصل بين:

- المستخدم كشخص
- وضعه الحالي كعضو داخل برنامج

### الحقول المقترحة
| الحقل | النوع | مطلوب | ملاحظات |
|------|------|--------|---------|
| `id` | uuid | نعم | المفتاح الأساسي |
| `member_id` | uuid | نعم | FK إلى `users.id` حيث الدور `member` |
| `program_id` | uuid | نعم | FK إلى `programs.id` |
| `assigned_coach_id` | uuid | لا | FK إلى `users.id` حيث الدور `coach` |
| `membership_status` | enum / text | نعم | `trial`, `active`, `paused`, `inactive`, `completed` |
| `engagement_status` | enum / text | نعم | `active`, `at_risk`, `needs_follow_up`, `improving`, `inactive` |
| `risk_level` | enum / text | لا | `low`, `medium`, `high` |
| `start_date` | date | نعم | بداية الانتساب |
| `end_date` | date | لا | عند التوقف أو الانتهاء |
| `notes` | text | لا | ملاحظات تشغيلية عامة |
| `created_at` | timestamptz | نعم | |
| `updated_at` | timestamptz | نعم | |

### قيود مقترحة
- `member_id` و`program_id` يمكن أن يتكررا تاريخيًا، لكن ليس لانتسابين نشطين متوازيين لنفس البرنامج

### قاعدة عمل
يمكن لاحقًا فرض قيد مثل:
- لا يوجد أكثر من `active enrollment` لنفس العضو ونفس البرنامج في نفس الوقت

---

## 6.4 جدول الخطط الأسبوعية `weekly_plans`

### الهدف
تخزين الخطة الأسبوعية التي ينشئها المدرب.

### الحقول المقترحة
| الحقل | النوع | مطلوب | ملاحظات |
|------|------|--------|---------|
| `id` | uuid | نعم | المفتاح الأساسي |
| `title` | text | نعم | مثال: Week 1 Discipline Reset |
| `week_start_date` | date | نعم | بداية الأسبوع المرجعي |
| `week_end_date` | date | لا | اختياري |
| `goal_summary` | text | نعم | الهدف العام للأسبوع |
| `focus_area` | text | لا | مثال: endurance / consistency |
| `target_sessions` | integer | نعم | عدد الحصص المستهدف |
| `coach_instructions` | text | لا | توجيهات المدرب |
| `habit_focus` | text | لا | تركيز سلوكي مثل النوم أو الماء |
| `created_by` | uuid | نعم | FK إلى `users.id` |
| `is_published` | boolean | نعم | افتراضيًا `false` |
| `published_at` | timestamptz | لا | |
| `created_at` | timestamptz | نعم | |
| `updated_at` | timestamptz | نعم | |

### ملاحظة
هذا الجدول يخزن الخطة نفسها، لكن لا يخزن لمن تم تعيينها. لذلك نحتاج جدول ربط.

---

## 6.5 جدول تعيين الخطط `weekly_plan_assignments`

### الهدف
ربط الخطة الأسبوعية بالأعضاء أو بالانتسابات.

### لماذا نربطها بـ `member_enrollments`؟
لأن الخطة مرتبطة غالبًا بالسياق التدريبي الحالي للعضو، لا بالشخص بشكل مجرد.

### الحقول المقترحة
| الحقل | النوع | مطلوب | ملاحظات |
|------|------|--------|---------|
| `id` | uuid | نعم | المفتاح الأساسي |
| `weekly_plan_id` | uuid | نعم | FK إلى `weekly_plans.id` |
| `enrollment_id` | uuid | نعم | FK إلى `member_enrollments.id` |
| `assignment_status` | enum / text | نعم | `assigned`, `active`, `completed`, `cancelled` |
| `assigned_at` | timestamptz | نعم | |
| `created_at` | timestamptz | نعم | |
| `updated_at` | timestamptz | نعم | |

### قيود مقترحة
- `unique(weekly_plan_id, enrollment_id)`

### قاعدة عمل
في الـ MVP، من الأفضل أن يكون هناك **خطة أسبوعية نشطة واحدة فقط لكل enrollment لكل أسبوع**.

---

## 6.6 جدول النصائح اليومية `daily_tips`

### الهدف
تخزين المحتوى القصير الذي يراه العضو داخل شاشة النصائح.

### الحقول المقترحة
| الحقل | النوع | مطلوب | ملاحظات |
|------|------|--------|---------|
| `id` | uuid | نعم | المفتاح الأساسي |
| `title` | text | لا | اختياري إذا كانت النصيحة قصيرة جدًا |
| `body` | text | نعم | النصيحة نفسها |
| `tip_type` | enum / text | نعم | `motivation`, `nutrition`, `recovery`, `discipline`, `sleep`, `hydration` |
| `program_id` | uuid | لا | FK إلى `programs.id` إذا كانت النصيحة مرتبطة ببرنامج |
| `audience_role` | text | لا | غالبًا `member` |
| `is_active` | boolean | نعم | |
| `publish_date` | date | لا | إن أردنا ربطها بيوم معين |
| `created_by` | uuid | نعم | FK إلى `users.id` |
| `created_at` | timestamptz | نعم | |
| `updated_at` | timestamptz | نعم | |

### ملاحظة
يمكن في الـ MVP الاكتفاء بنصيحة عامة، ثم لاحقًا إضافة تخصيص أكثر دقة.

---

## 6.7 جدول قراءة النصائح `daily_tip_reads`

### الهدف
قياس ما إذا كان العضو قرأ النصيحة أم لا، لدعم مؤشرات مثل:

- `Daily Tip Read Rate`

### الحقول المقترحة
| الحقل | النوع | مطلوب | ملاحظات |
|------|------|--------|---------|
| `id` | uuid | نعم | المفتاح الأساسي |
| `daily_tip_id` | uuid | نعم | FK إلى `daily_tips.id` |
| `member_id` | uuid | نعم | FK إلى `users.id` |
| `read_at` | timestamptz | نعم | وقت القراءة |

### قيود مقترحة
- `unique(daily_tip_id, member_id)`

---

## 6.8 جدول الحضور `attendance_logs`

### الهدف
تخزين الحضور الفعلي أو اليدوي للحصص، لأن شاشة التقدم تحتاج عدد الحصص.

### الحقول المقترحة
| الحقل | النوع | مطلوب | ملاحظات |
|------|------|--------|---------|
| `id` | uuid | نعم | المفتاح الأساسي |
| `enrollment_id` | uuid | نعم | FK إلى `member_enrollments.id` |
| `attendance_date` | date | نعم | تاريخ الحضور |
| `session_type` | text | لا | Boxing / Fitness / Cardio |
| `status` | enum / text | نعم | `attended`, `missed`, `cancelled` |
| `recorded_by` | uuid | لا | FK إلى `users.id` |
| `source` | enum / text | لا | `manual`, `imported`, `system` |
| `created_at` | timestamptz | نعم | |

### لماذا هذا الجدول مهم؟
بدونه سيكون من الصعب حساب:

- عدد الحصص الأسبوعية
- عدد الحصص خلال آخر 4 أسابيع
- مؤشرات الالتزام المرتبطة بالحضور

---

## 6.9 جدول الـ Check-ins الأسبوعية `weekly_checkins`

### الهدف
تخزين التقييم الأسبوعي السريع الذي يرسله العضو.

### الحقول المقترحة
| الحقل | النوع | مطلوب | ملاحظات |
|------|------|--------|---------|
| `id` | uuid | نعم | المفتاح الأساسي |
| `enrollment_id` | uuid | نعم | FK إلى `member_enrollments.id` |
| `week_start_date` | date | نعم | بداية الأسبوع المرجعي |
| `sessions_attended` | integer | لا | يمكن أن يدخله العضو أو يُقارن بالحضور |
| `energy_level` | smallint | لا | مثال من 1 إلى 5 |
| `sleep_quality` | smallint | لا | من 1 إلى 5 |
| `nutrition_commitment` | smallint | لا | من 1 إلى 5 |
| `overall_rating` | smallint | لا | من 1 إلى 5 |
| `member_note` | text | لا | ملاحظة حرة |
| `submitted_at` | timestamptz | نعم | |
| `created_at` | timestamptz | نعم | |
| `updated_at` | timestamptz | نعم | |

### قيود مقترحة
- `unique(enrollment_id, week_start_date)`

### قاعدة عمل
Check-in واحد فقط لكل عضو/انتساب في كل أسبوع.

---

## 6.10 جدول ملاحظات المدرب `coach_notes`

### الهدف
تسجيل ملاحظات المدرب التي تدعم المتابعة الفردية.

### الحقول المقترحة
| الحقل | النوع | مطلوب | ملاحظات |
|------|------|--------|---------|
| `id` | uuid | نعم | المفتاح الأساسي |
| `enrollment_id` | uuid | نعم | FK إلى `member_enrollments.id` |
| `author_id` | uuid | نعم | FK إلى `users.id` |
| `note_body` | text | نعم | النص |
| `note_type` | enum / text | نعم | `feedback`, `warning`, `encouragement`, `internal` |
| `visibility` | enum / text | نعم | `member_visible`, `internal_only` |
| `requires_follow_up` | boolean | نعم | |
| `created_at` | timestamptz | نعم | |
| `updated_at` | timestamptz | نعم | |

### ملاحظة
هذا الجدول يدعم شاشة:
- ملاحظات المدرب
- تفاصيل العضو
- جزء من Queue المتابعة

---

## 6.11 جدول مهام المتابعة `follow_up_tasks`

### الهدف
إعطاء المدرب والإدارة Queue واضحة للمتابعة بدل الاعتماد فقط على الحقول النصية.

### لماذا هذا الجدول مهم؟
لأن `needs_follow_up` كعلم Boolean جيد، لكنه لا يكفي لتنظيم العمل.

### الحقول المقترحة
| الحقل | النوع | مطلوب | ملاحظات |
|------|------|--------|---------|
| `id` | uuid | نعم | المفتاح الأساسي |
| `enrollment_id` | uuid | نعم | FK إلى `member_enrollments.id` |
| `created_by` | uuid | نعم | FK إلى `users.id` |
| `assigned_to` | uuid | لا | FK إلى `users.id` |
| `task_type` | enum / text | نعم | `coach_follow_up`, `admin_follow_up`, `risk_review`, `attendance_drop`, `checkin_missing` |
| `reason` | text | نعم | سبب إنشاء المتابعة |
| `status` | enum / text | نعم | `open`, `in_progress`, `resolved`, `cancelled` |
| `priority` | enum / text | نعم | `low`, `medium`, `high` |
| `due_date` | date | لا | |
| `resolved_at` | timestamptz | لا | |
| `created_at` | timestamptz | نعم | |
| `updated_at` | timestamptz | نعم | |

### ملاحظات
هذا الجدول يغذي مباشرة:
- `At-Risk Members`
- `Follow-up Queue`
- `Coach Dashboard`
- `Admin Overview`

---

## 6.12 جدول الإشعارات `notifications`

### الهدف
تخزين الإشعارات الداخلية داخل النظام.

### الحقول المقترحة
| الحقل | النوع | مطلوب | ملاحظات |
|------|------|--------|---------|
| `id` | uuid | نعم | المفتاح الأساسي |
| `recipient_user_id` | uuid | نعم | FK إلى `users.id` |
| `type` | enum / text | نعم | `plan_published`, `checkin_reminder`, `coach_note`, `tip_published`, `follow_up_flag` |
| `title` | text | نعم | عنوان قصير |
| `body` | text | لا | محتوى مختصر |
| `reference_table` | text | لا | مثال: `weekly_plans` |
| `reference_id` | uuid | لا | الكيان المرتبط |
| `is_read` | boolean | نعم | افتراضيًا `false` |
| `read_at` | timestamptz | لا | |
| `created_at` | timestamptz | نعم | |

### ملاحظة
وجود `reference_table` و`reference_id` يساعد على فتح العنصر المرتبط مباشرة من الإشعار.

---

## 7. العلاقات الأساسية بين الجداول

## 7.1 العلاقات الرئيسية

```text
users
├── 1:N member_enrollments (as member)
├── 1:N member_enrollments (as assigned coach)
├── 1:N weekly_plans (created_by)
├── 1:N daily_tips (created_by)
├── 1:N coach_notes (author_id)
├── 1:N follow_up_tasks (created_by / assigned_to)
└── 1:N notifications

programs
└── 1:N member_enrollments

member_enrollments
├── 1:N weekly_plan_assignments
├── 1:N attendance_logs
├── 1:N weekly_checkins
├── 1:N coach_notes
└── 1:N follow_up_tasks

weekly_plans
└── 1:N weekly_plan_assignments

daily_tips
└── 1:N daily_tip_reads
```

---

## 8. Enums المقترحة

## 8.1 `user_role`
- `member`
- `coach`
- `admin`

## 8.2 `membership_status`
- `trial`
- `active`
- `paused`
- `inactive`
- `completed`

## 8.3 `engagement_status`
- `active`
- `at_risk`
- `needs_follow_up`
- `improving`
- `inactive`

## 8.4 `risk_level`
- `low`
- `medium`
- `high`

## 8.5 `assignment_status`
- `assigned`
- `active`
- `completed`
- `cancelled`

## 8.6 `tip_type`
- `motivation`
- `nutrition`
- `recovery`
- `discipline`
- `sleep`
- `hydration`

## 8.7 `attendance_status`
- `attended`
- `missed`
- `cancelled`

## 8.8 `note_type`
- `feedback`
- `warning`
- `encouragement`
- `internal`

## 8.9 `note_visibility`
- `member_visible`
- `internal_only`

## 8.10 `follow_up_task_type`
- `coach_follow_up`
- `admin_follow_up`
- `risk_review`
- `attendance_drop`
- `checkin_missing`

## 8.11 `follow_up_status`
- `open`
- `in_progress`
- `resolved`
- `cancelled`

## 8.12 `task_priority`
- `low`
- `medium`
- `high`

## 8.13 `notification_type`
- `plan_published`
- `checkin_reminder`
- `coach_note`
- `tip_published`
- `follow_up_flag`

---

## 9. الجداول المشتقة أو الـ Views المقترحة لاحقًا

هذه ليست ضرورية منذ اليوم الأول، لكنها مفيدة جدًا:

## 9.1 `member_weekly_summary_view`
### الهدف
عرض ملخص جاهز لشاشة المشترك أو للمدرب يتضمن:
- الخطة الحالية
- عدد الحصص هذا الأسبوع
- هل أرسل Check-in؟
- آخر ملاحظة مرئية

## 9.2 `at_risk_members_view`
### الهدف
تجميع الأعضاء المعرضين للخطر وفق شروط مثل:
- انخفاض الحضور
- غياب Check-in
- وجود Follow-up مفتوحة عالية الأولوية

## 9.3 `coach_work_queue_view`
### الهدف
تجهيز قائمة عمل مرتبة للمدرب:
- Check-ins جديدة
- أعضاء يحتاجون متابعة
- خطط تحتاج نشرًا أو تعديلًا

---

## 10. الفهارس `Indexes` المقترحة

الفهارس التالية مهمة في الـ MVP لأنها ستخدم الاستعلامات اليومية المتكررة:

## 10.1 `users`
- index على `role`
- index على `phone`
- index على `email`

## 10.2 `member_enrollments`
- index على `member_id`
- index على `assigned_coach_id`
- index على `membership_status`
- index على `engagement_status`
- index على `(member_id, membership_status)`

## 10.3 `weekly_plans`
- index على `week_start_date`
- index على `created_by`
- index على `is_published`

## 10.4 `weekly_plan_assignments`
- index على `enrollment_id`
- index على `weekly_plan_id`
- index على `assignment_status`

## 10.5 `daily_tips`
- index على `publish_date`
- index على `tip_type`
- index على `is_active`

## 10.6 `attendance_logs`
- index على `enrollment_id`
- index على `attendance_date`
- index على `(enrollment_id, attendance_date)`

## 10.7 `weekly_checkins`
- index على `enrollment_id`
- index على `week_start_date`
- unique على `(enrollment_id, week_start_date)`

## 10.8 `coach_notes`
- index على `enrollment_id`
- index على `author_id`
- index على `visibility`
- index على `requires_follow_up`

## 10.9 `follow_up_tasks`
- index على `enrollment_id`
- index على `assigned_to`
- index على `status`
- index على `priority`
- index على `(status, priority)`

## 10.10 `notifications`
- index على `recipient_user_id`
- index على `is_read`
- index على `created_at`
- index على `(recipient_user_id, is_read)`

---

## 11. قواعد بيانات العمل `Business Data Rules`

### 1. مستخدم واحد = دور واحد في الـ MVP
في النسخة الأولى، نوصي بأن يكون لكل مستخدم دور أساسي واحد فقط لتقليل التعقيد.

### 2. العضو يجب أن يمتلك انتسابًا واحدًا نشطًا على الأقل ليدخل تجربة المتابعة
إذا لم يكن له انتساب نشط، لا يجب أن تظهر له تجربة المتابعة الكاملة.

### 3. Check-in أسبوعي واحد فقط لكل Enrollment
هذا يقلل التضارب ويسهّل التحليل.

### 4. الخطة ترتبط بالانتساب لا بالمستخدم فقط
لأن السياق التدريبي هو المرجع الحقيقي للخطة.

### 5. الـ Follow-up يجب أن تكون Task قابلة للإغلاق
لا يكفي وضع ملاحظة دون حالة تنفيذ.

### 6. مؤشرات الخطر يجب أن تكون قابلة للاشتقاق وقابلة للتعديل يدويًا
- من النظام: مثل غياب Check-in أو ضعف الحضور
- من المدرب/الإدارة: عبر `follow_up_tasks` أو تحديث `engagement_status`

---

## 12. ما الذي يدخل في النطاق الآن وما الذي يؤجل؟

## 12.1 داخل نطاق الـ MVP
- `users`
- `programs`
- `member_enrollments`
- `weekly_plans`
- `weekly_plan_assignments`
- `daily_tips`
- `attendance_logs`
- `weekly_checkins`
- `coach_notes`
- `follow_up_tasks`
- `notifications`

## 12.2 يمكن تأجيله إذا أردنا نسخة أكثر خفة
- `daily_tip_reads`
- أي Views معقدة
- أي Snapshot tables إضافية

## 12.3 خارج النطاق حاليًا
- billing
- payments
- bookings engine متكامل
- chat messages حرة
- nutrition plans تفصيلية يومية
- wearable integrations
- AI recommendation layer

---

## 13. مثال Query Thinking على مستوى المنتج

هذا ليس SQL فعليًا، لكنه يوضح كيف سيُستخدم الـ Schema:

### مثال 1: شاشة Member Dashboard تحتاج
- المستخدم الحالي
- انتسابه النشط
- الخطة الأسبوعية الحالية
- هل أرسل Check-in؟
- آخر ملاحظة مرئية من المدرب
- عدد الحصص هذا الأسبوع

### مثال 2: شاشة Coach Dashboard تحتاج
- عدد Check-ins الجديدة
- قائمة الأعضاء `at_risk`
- قائمة `follow_up_tasks` المفتوحة
- ملخص سريع حسب البرنامج

### مثال 3: شاشة Admin Overview تحتاج
- عدد الأعضاء النشطين أسبوعيًا
- نسبة Check-ins المكتملة
- عدد المهام المفتوحة عالية الأولوية
- قائمة الأعضاء منخفضي الالتزام

---

## 14. ترتيب التنفيذ المقترح للقاعدة

إذا أردنا تحويل هذه الوثيقة إلى تنفيذ فعلي، فالترتيب الأفضل هو:

1. إنشاء `users`
2. إنشاء `programs`
3. إنشاء `member_enrollments`
4. إنشاء `weekly_plans`
5. إنشاء `weekly_plan_assignments`
6. إنشاء `daily_tips`
7. إنشاء `attendance_logs`
8. إنشاء `weekly_checkins`
9. إنشاء `coach_notes`
10. إنشاء `follow_up_tasks`
11. إنشاء `notifications`
12. إضافة الفهارس والقيود
13. إنشاء Views لاحقًا عند الحاجة

---

## 15. التوصية النهائية

أفضل Schema أولية لـ Altis في هذه المرحلة هي Schema:

- **مضغوطة لكنها كافية**
- **تركز على رحلة العضو الأسبوعية**
- **تدعم تشغيل المدرب يوميًا**
- **تسمح للإدارة برؤية الخطر مبكرًا**
- **لا تدخل مبكرًا في تعقيد الحجوزات والدفع والدردشة الحرة**

باختصار:

**إذا كانت الـ PRD تحدد ماذا نبني، وهذه الـ Screens Map تحدد كيف سيُستخدم المنتج، فإن هذه الوثيقة تحدد أين ستعيش البيانات وكيف ستتحرك داخل Altis MVP.**

---

## 16. الخطوة التالية بعد هذه الوثيقة

أفضل خطوة تالية الآن هي واحدة من ثلاث:

1. تحويل هذا الـ Schema إلى **SQL Draft**
2. كتابة **User Stories + Acceptance Criteria**
3. إعداد **Wireframe Spec** لكل شاشة

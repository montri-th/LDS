window.LDS_ROLES={
marketing:{next:'Product',title:['เขียนให้น่าสนใจ โดยไม่ทำให้ตัวอย่างจำลองดูเป็นผลจริง','Make the message compelling without turning a fixture into a real result'],description:['รักษา finding, source status, limitation และ next safe action ไว้ครบในทุกข้อความ','Preserve the finding, source status, limitation, and next safe action in every message.'],baseline:['คำโปรยเลื่อนสถานะหลักฐาน','Copy silently upgrades the evidence','“พื้นที่ B เสี่ยงกว่า 2.4 เท่า” สร้างตัวเลขและทำให้ fixture ดูเหมือนผลยืนยันแล้ว','“Site B is 2.4× more exposed” invents a metric and makes the fixture look verified.'],assisted:['finding และข้อจำกัดเดินทางไปด้วยกัน','Finding and limitation travel together','ระบุว่าเป็นพื้นที่จำลอง บอกเฉพาะสิ่งที่เห็น และชี้ว่าต้องแทนด้วยข้อมูลจริงก่อนตัดสินใจ','Name the synthetic context, state only what it shows, and require current evidence before deciding.'],prompt:`Use Landometer Design System v0.8.7.
Role: Marketing
Object: citymeter.synthetic.area-comparison@0.8.7
Status: modelled · synthetic fixture
Finding: Synthetic Site B overlaps the fixture flood extent more than A and C.
Limitation: Not a current CityMETER result; cannot support a real-site decision.
Create natural Thai opening copy, an independent English sibling, and an evidence note. Do not invent a number or call the result official.`},
product:{next:'Design',title:['ผูก one job, AHA และ capability ให้ตรงกับสิ่งที่เปิดใช้จริง','Bind one job, AHA, and capability to what is actually enabled'],description:['ทำ Build Card ให้ชัดว่าหน้านี้สอน evidence handoff และไม่มี save, share หรือ external effect','Make the Build Card explicit: this teaches evidence handoff and has no save, share, or external effect.'],baseline:['ทุกกลไกกลายเป็น feature','Every mechanism becomes a feature','หน้าเต็มไปด้วย search, share, save และ technical cards แม้ไม่มี user job หรือ backend รองรับ','Search, share, save, and technical cards appear without a user job or backend.'],assisted:['capability ที่ false หายไปจาก UI','False capabilities disappear from the UI','เหลือเพียง theme, language, role และ copy ซึ่งทำงานจริงในหน้านี้','Only theme, language, role, and copy remain because they actually work here.'],prompt:`Complete a Landometer v0.8.7 Build Card.
Product: landometer
Profile: designsystem.adoption
Evidence: source_limited
Object: citymeter.synthetic.area-comparison@0.8.7
First AHA: role-specific Baseline / Assisted difference
Capabilities: search false, share false, persistence false, externalSideEffect false.
Return the completed card and controls that must be omitted.`},
design:{next:'Engineering',title:['ให้คนเห็นผลต่างก่อนเปิดรายละเอียดทางเทคนิค','Show the useful difference before technical detail'],description:['ใช้ editorial hierarchy ภาพจริง และพื้นที่ว่าง แล้วเก็บกฎละเอียดไว้ใน Reference','Use editorial hierarchy, real photography, and genuine quiet space; keep detailed rules in Reference.'],baseline:['กฎกลายเป็น card จนไม่มีอะไรนำสายตา','Rules become cards until nothing leads','ภาพคนกลายเป็น background และ quiet field กลายเป็นแผ่นสีที่แย่งความสนใจ','People become background decoration and the quiet field becomes a competing colored block.'],assisted:['ตัวอักษร ภาพ และพื้นที่ว่างพาไปยังงาน','Type, image, and space lead to the work','หนึ่ง headline หนึ่งภาพจริง หนึ่ง action และหนึ่ง workbench ส่งคุณค่าก่อน','One headline, one real image, one action, and one workbench deliver value first.'],prompt:`Design a Landometer v0.8.7 adoption scene.
One job: improve one governed evidence handoff.
Use the official transparent horizontal logo on a clean light header and an approved team photo beside, never behind, the copy.
Show one headline, one action, a genuine quiet field, and invariant Baseline / Assisted states.
Do not use a floating dashboard card, generic SaaS bento grid, or decorative gradient.`}};

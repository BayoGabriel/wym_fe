const Feature_Item = ({ icon: IconComponent, text, position }: { icon: any; text: string; position: string }) => (
    <div className={position}>
      <div className="bg-white max-xlg:w-[50px] hover:animate-spin w-[96px]">
        <IconComponent />
      </div>
      <span className="font-geist text-center">{text}</span>
    </div>
  );
export default Feature_Item
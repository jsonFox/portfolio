export default function SkillIcon({ icon, name }: { icon: JSX.Element, name: string }) {
  return (
    <>
      {icon}
      <p>{name}</p>
    </>
  )
}
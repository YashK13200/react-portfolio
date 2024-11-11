import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Yash Kashyap, </span>
        <br />a web developer currently based in{' '}
        <span className={s.purple}>kanpur, India.</span>
        <br />
        <br />
        I am doing my Bachelor's degree in Computer Science and
        <br />
        I am passionate about web development.
        <br />
        <br />
        My hobbies beyond programming:
      </p>

      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>
          - Watching Anime's
        </li>
        <li className={s.aboutActivity}>
          - Reading
        </li>
        <li className={s.aboutActivity}>
          - Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;

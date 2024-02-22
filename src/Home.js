import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Home.css';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));







const Home = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    let video = "./pic/bear.mp4";
    return (<>
        <Card elevation={10} sx={{ maxWidth: 500, mr: 50, mt: 3 }}>
            <CardHeader sx={{textAlign:"center"}}

                title="עזרו לנו להציל אותם!!!"
                subheader="טבת תשפ''ד"
            />
            <CardMedia className='video'
                component="iframe"
                src={video}
                height="194"
                controls
                autoPlay={"autoplay"}
                
                preLoad="auto"
                muted
                //   allow="autoPlay"
            />

            <CardContent>
                <Typography variant="body1" color="text.secondary" textAlign={'justify'}>

                    מצב שימורו של דוב הקוטב על פי האו"ם פגיע הוא נמצא בסיכון!!!

                    יש זואולוגים סבורים כי ההמסה הצפויה של הקרחונים ושל ימות הקרח בשל ההתחממות העולמית תביא לצמצום אוכלוסיות דובי הקוטב לכדי שליש מגודלן הנוכחי עד אמצע המאה ה-21 מחקרים ארוכי-טווח מראים כי רוב תת-האוכלוסיות של דובי הקוטב נמצאות בתהליך הצטמצמות


                    עזרו לנו להציל אותם!!!
                </Typography>
            </CardContent>
            <CardActions disableSpacing>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"

                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>

                <CardContent>
                    <CardMedia 
                        component="img"
                        height="194"
                        image="./pic/bear.jpg"
                        alt="bearHome"
                    />
                    <Typography variant="body1" color="text.secondary" textAlign={'justify'}>
                        דוב קוטב (שם מדעי: Ursus maritimus) או דוב לבן הוא דוב שתפוצתו מוגבלת לאזור הארקטי. לצד דובי הקודיאק, דובי הקוטב הם הטורפים היבשתיים הגדולים ביותר בעולם, הזכרים הבוגרים שוקלים בין 300 ל-700 קילוגרם, והנקבות שוקלות כחצי ממשקל הזכרים. פרוותם חלולה ושקופה למחצה, אולם לצופה מרחוק היא נראית בצבע לבן או בז', ולכן היא מספקת לדובים הסוואה.

                        עורם של דובי הקוטב שחור. שכבת השומן והפרווה שלהם מגנות עליהם מפני הקור העז השורר באזורי המחיה שלהם. זנבם הקצר ואוזניהם הקטנות מאפשרים את הקטנת איבוד החום לסביבה. מבנה גופם וראשם הקטן מותאמים לשחייה חלקה במים.

                        דוב הקוטב הוא יונק ימי מימי-למחצה, והוא הסתגל לכמה סביבות חיים: יבשה, ים וקרח. באזורי מחייתו הוא נחשב לטורף-על. הוא ניזון בעיקר מכלבי ים, מניבתנים ומלווייתנאים, אולם הוא יאכל כל מה שיעלה בידו. כמו כן הוא חוטף טרף של טורפים קטנים כמו שועלים, זאבים או דובים אחרים.

                    </Typography>

                    <Typography textAlign='center' textStyle=''>
                        עזרו לנו להציל אותם!
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>

    </>);
}

export default Home;

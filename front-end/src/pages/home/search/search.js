import styles from './search.module.css';
import SearchIcon from '@mui/icons-material/Search';
function Search(props) {
	return (
		<div className={styles.searchdiv}>
			<div className={styles.inputdiv}>
				<input
					name="searchinput"
					type="text"
					placeholder="Search by name, category"
					value={props.searchQuery}
					onChange={(e) => {
						props.setSearchQuery(e.target.value);
					}}
				/>
			</div>
			<div className={styles.searchicon} onClick={props.searchItems}>
				<SearchIcon htmlColor="white" titleAccess="Search" fontSize="large" />
			</div>
		</div>
	);
}

export default Search;

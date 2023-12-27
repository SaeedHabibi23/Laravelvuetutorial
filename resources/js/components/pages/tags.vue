<template>
    <div>
       <div class="content">
			<div class="container-fluid">
				
				<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
				<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">Tags     <Button type="primary" @click="modal = true">Add Tag</Button>
</p>

					<div class="_overflow _table_div">
						<table class="_table">
								<!-- TABLE TITLE -->
							<tr>
								<th>ID</th>
								<th>TagName</th>
								<th>createdAt</th>
								<th>Action</th>
							</tr>
								<!-- TABLE TITLE -->


								<!-- ITEMS -->
							<tr>
								<td>1</td>
								<td class="_table_name">Manhattan's art center "Shed" opening ceremony</td>
								<td>Economy</td>
								<td>
									<button class="_btn _action_btn edit_btn1" type="button">Edit</button>
									<button class="_btn _action_btn make_btn1" type="button">Delete</button>
								</td>
							</tr>
								<!-- ITEMS -->
							 
						 
						</table>
					</div>
				</div>

				<!-- Tag Modal -->
				<Button type="primary" @click="modal = true">Display dialog box</Button>
  

			</div>
		</div>
    </div>
</template>

<script>

	
export default {
      
    }
 
 

</script>
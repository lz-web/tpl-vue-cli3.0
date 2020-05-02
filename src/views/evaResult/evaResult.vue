<template>
	<div class="evaResult-wrap hui-container">
		<div class="evaResult-inner">
			<div class="evaResult-header flex-between">
				<div class="evaResult-header-left flex-col">
					<span class="med-name">药名</span>
					<span class="med-eva-num">已有{{}}人进行测评</span>
					<router-link class="med-detail" to="/detail?id=1">查看详情 &gt;</router-link>
				</div>
				<div class="evaResult-header-right flex-end">
                    <el-button class="reEva" @click="reEva()" type="primary">重新测评</el-button>
                    <el-button class="download-evaResult" @click="downloadEvaResult()" type="primary">下载</el-button>
				</div>
			</div>
			
			<div class="evaResult-cont flex-col">
				<div class="eva eva-self flex-col-between">
					<div class="eva-cont eva-self-cont flex1">

					</div>
					<div class="eva-bottom eva-self-bottom flex-end">
						<div class="eva-bottom-cont flex-end">
							<b class="eva-bottom-cont-number flex-center">8.2</b>
							<span class="eva-bottom-cont-fen">分</span>
						</div>
						<span class="eva-bottom-title eva-self-bottom-title">自评综合得分</span>
					</div>
				</div>
				<div class="eva eva-industry flex-col-between">
					<div class="eva-cont eva-industry-cont flex1">

					</div>
					<div class="eva-bottom eva-industry-bottom flex-end">
						<div class="eva-bottom-cont flex-end">
							<b class="eva-bottom-cont-number flex-center">8.2</b>
							<span class="eva-bottom-cont-fen">分</span>
						</div>
						<span class="eva-bottom-title eva-self-bottom-title">行业综合得分</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./evaResult.ts"></script>

<style lang="scss">
  	@import './evaResult.scss';
</style>


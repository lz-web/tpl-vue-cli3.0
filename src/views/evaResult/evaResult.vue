<template>
	<div class="evaResult-wrap hui-container">
		<div class="evaResult-inner">
			<div class="evaResult-header flex-between">
				<div class="evaResult-header-left flex-col">
					<span>药名</span>
					<span>已有{{}}人进行测评</span>
					<span>查看详情 &gt;</span>
				</div>
				<div class="evaResult-header-right flex-end">
                    <el-button class="reEva" @click="reEva()" type="primary">重新测评</el-button>
                    <el-button class="download-evaResult" @click="downloadEvaResult()" type="primary">下载</el-button>
				</div>
			</div>
			
			<div class="evaResult-cont flex-col">
				<div class="eva-by-myself"></div>
				<div class="eva-by-industry"></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./evaResult.ts"></script>

<style lang="scss">
  	@import './evaResult.scss'
</style>

